const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Bill = require('./models/bill.model');
const Food = require('./models/food.model');
const Nutrient = require('./models/nutrient.model');
const Order = require('./models/order.model');
const User = require('./models/user.model');
const { response } = require('express');

describe('REST API integration tests', () => {
    const insertBill = [
        { "_id": 1, "orderId": 17, "amount": 639, "status": "új" },
        { "_id": 2, "orderId": 5, "amount": 598, "status": "új" },
        { "_id": 3, "orderId": 5, "amount": 859, "status": "új" },
        { "_id": 4, "orderId": 17, "amount": 589, "status": "fizetve" },
        { "_id": 5, "orderId": 4, "amount": 798, "status": "fizetve" }
    ];

    const insertFood = [
        {
            "_id": 1,
            "foodName": "Húsos rakott karfiol",
            "ingredients": [
                "karfiol",
                "sertéslapocka",
                "tej",
                "rizs",
                "búzaliszt",
                "sárgarépa",
                "vöröshagyma",
                "sárgarépa",
                "zeller",
                "só",
                "fokhagyma"
            ],
            "category": "hagyományos",
            "active": true,
            "price": 1200,
            "image": "../../../assets/images/1karfiol.jpg"
        },
        {
            "_id": 2,
            "foodName": "Gombás rizseshús",
            "ingredients": [
                "csirkemell",
                "rizs",
                "csiperkegomba",
                "vöröshagyma",
                "paprika",
                "paradicsom",
                "búzaliszt",
                "só",
                "sárgarépa",
                "zeller",
                "fokhagyma"
            ],
            "category": "hagyományos",
            "active": true,
            "price": 1240,
            "image": "../../../assets/images/2rizses.jpg"
        },
        {
            "_id": 3,
            "foodName": "Panírozott halrudak, burgonyapüré",
            "ingredients": [
                "burgonya",
                "tej",
                "tőkehal",
                "búzaliszt",
                "só"
            ],
            "category": "hagyományos",
            "active": true,
            "price": 1285,
            "image": "../../../assets/images/3halrudak.jpg"
        }
    ];

    const insertNutrient = [
        {
            "_id": 1,
            "foodName": "mandula",
            "foodGroup": "olajos mag",
            "Avitamin": 2,
            "B1vitamin": "0.2",
            "B2vitamin": "1.138",
            "B3vitamin": "3.618",
            "B5vitamin": "0.471",
            "B6vitamin": "0.137",
            "B12vitamin": "0",
            "Cvitamin": "0",
            "Dvitamin": "0",
            "Evitamin": "25.63",
            "Kvitamin": "0",
            "folat": "44",
            "kalcium": "269",
            "rez": "1.031",
            "vas": "3.71",
            "magnezium": "270",
            "mangan": "2.179",
            "foszfor": "481",
            "kalium": "733",
            "szelen": "4.1",
            "natrium": "1",
            "cink": "3.12",
            "omegaharom": "0.003",
            "omegahat": "12.324",
            "telitett": "3.802",
            "szenhidrat": "21.55",
            "rost": "12.5",
            "kemenyito": "0.72",
            "feherje": "21.15",
            "cisztein": "0.215",
            "hisztidin": "0.539",
            "izoleucin": "0.751",
            "leucin": "1.473",
            "lizin": "0.568",
            "metionin": "0.157",
            "fenilAlanin": "1.132",
            "treonin": "0.601",
            "triptofan": "0.211",
            "tirozin": "0.45",
            "valin": "0.855",
            "zsir": "49.93"
        },
        {
            "_id": 2,
            "foodName": "szezámmag",
            "foodGroup": "olajos mag",
            "Avitamin": 66,
            "B1vitamin": "0.699",
            "B2vitamin": "0.09",
            "B3vitamin": "5.8",
            "B5vitamin": "0.29",
            "B6vitamin": "0.4",
            "B12vitamin": "0",
            "Cvitamin": "0",
            "Dvitamin": "0",
            "Evitamin": "1.68",
            "Kvitamin": "0",
            "folat": "115",
            "kalcium": "60",
            "rez": "1.4",
            "vas": "6.36",
            "magnezium": "345",
            "mangan": "1.44",
            "foszfor": "667",
            "kalium": "370",
            "szelen": "34.4",
            "natrium": "47",
            "cink": "6.73",
            "omegaharom": "0.263",
            "omegahat": "25.227",
            "telitett": "9.055",
            "szenhidrat": "11.73",
            "rost": "11.6",
            "kemenyito": "0.07",
            "feherje": "20.45",
            "cisztein": "0.44",
            "hisztidin": "0.55",
            "izoleucin": "0.75",
            "leucin": "1.5",
            "lizin": "0.65",
            "metionin": "0.88",
            "fenilAlanin": "0.94",
            "treonin": "0.73",
            "triptofan": "0.33",
            "tirozin": "0.79",
            "valin": "0.98",
            "zsir": "61.21"
        }
    ];

    const insertOrder = [
        { "_id": 1, "userId": 1, "foodId": 11, "amount": 768, "status": "új", "time": "2021-07-12T00:00:00.000Z" },
        { "_id": 2, "userId": 14, "foodId": 3, "amount": 734, "status": "teljesítve", "time": "2021-07-13T00:00:00.000Z" },
        { "_id": 3, "userId": 19, "foodId": 9, "amount": 626, "status": "új", "time": "2021-07-10T00:00:00.000Z" }
    ];

    const insertUser = [
        {
            "_id": 1,
            "firstName": "Olga",
            "lastName": "Hajas",
            "email": "hajas.olga@gmail.com",
            "phone": "06402445342",
            "zip": 8060,
            "city": "Csór",
            "address": "Petőfi u. 35.",
            "password": "test",
            "role": 1,
            "token": ""
        },
        {
            "_id": 2,
            "firstName": "Judit",
            "lastName": "Kiss",
            "email": "kiss.judit@gmail.com",
            "phone": "06405126632",
            "zip": 8600,
            "city": "Mór",
            "address": "Széchenyi u. 42.",
            "password": "test",
            "role": 2,
            "token": ""
        }
    ];

    beforeEach(done => {
        const { databasename, host } = config.get('database');
        mongoose
            .connect(`mongodb://${host}/${databasename}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    test('GET /bills', () => {
        return Bill.insertMany(insertBill)
            .then(() => supertest(app).get('/bills').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertBill.length);

                response.body.forEach((bill, index) => {
                    expect(bill.orderId).toBe(insertBill[index].orderId);
                    expect(bill.amount).toBe(insertBill[index].amount);
                    expect(bill.status).toBe(insertBill[index].status);
                });
            });
    });

    test('GET /bills/:id', () => {
        let billId;
        return Bill.insertMany(insertBill)
            .then(bills => {
                billId = bills[0]._id;
                return supertest(app).get(`/bills/${billId}`).expect(200);
            })
            .then(response => {
                const bill = response.body;
                expect(bill.orderId).toBe(insertBill[0].orderId);
                expect(bill.amount).toBe(insertBill[0].amount);
                expect(bill.status).toBe(insertBill[0].status);
            });
    });

    test('GET /foods', () => {
        return Food.insertMany(insertFood)
            .then(() => supertest(app).get('/foods').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertFood.length);

                response.body.forEach((food, index) => {
                    expect(food.foodName).toBe(insertFood[index].foodName);
                    expect(food.ingredients).toEqual(insertFood[index].ingredients);
                    expect(food.category).toBe(insertFood[index].category);
                    expect(food.active).toBe(insertFood[index].active);
                    expect(food.price).toBe(insertFood[index].price);
                    expect(food.image).toBe(insertFood[index].image);
                });
            });
    });

    test('GET /foods/:id', () => {
        let foodId;
        return Food.insertMany(insertFood)
            .then(foods => {
                foodId = foods[0]._id;
                return supertest(app).get(`/foods/${foodId}`).expect(200);
            })
            .then(response => {
                const food = response.body;
                expect(food.foodName).toBe(insertFood[0].foodName);
                expect(food.ingredients).toEqual(insertFood[0].ingredients);
                expect(food.category).toBe(insertFood[0].category);
                expect(food.active).toBe(insertFood[0].active);
                expect(food.price).toBe(insertFood[0].price);
                expect(food.image).toBe(insertFood[0].image);
            });
    });

    test('GET /nutrients', () => {
        return Nutrient.insertMany(insertNutrient)
            .then(() => supertest(app).get('/nutrients').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertNutrient.length);

                response.body.forEach((nutrient, index) => {
                    expect(nutrient.foodName).toBe(insertNutrient[index].foodName);
                    expect(nutrient.foodGroup).toBe(insertNutrient[index].foodGroup);
                    expect(nutrient.Avitamin).toBe(insertNutrient[index].Avitamin);
                });
            });
    });

    test('GET /nutrients/:id', () => {
        let billId;
        return Nutrient.insertMany(insertNutrient)
            .then(nutrients => {
                nutrientId = nutrients[0]._id;
                return supertest(app).get(`/nutrients/${nutrientId}`).expect(200);
            })
            .then(response => {
                const nutrient = response.body;
                expect(nutrient.foodName).toBe(insertNutrient[0].foodName);
                expect(nutrient.foodGroup).toBe(insertNutrient[0].foodGroup);
                expect(nutrient.Avitamin).toBe(insertNutrient[0].Avitamin);
            });
    });

    test('GET /orders', () => {
        return Order.insertMany(insertOrder)
            .then(() => supertest(app).get('/orders').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertOrder.length);

                response.body.forEach((order, index) => {
                    expect(order.userId).toBe(insertOrder[index].userId);
                    expect(order.foodsId).toBe(insertOrder[index].foodsId);
                    expect(order.amount).toBe(insertOrder[index].amount);
                    expect(order.status).toBe(insertOrder[index].status);
                    expect(order.time).toBe(insertOrder[index].time);
                });
            });
    });

    test('GET /orders/:id', () => {
        let orderId;
        return Order.insertMany(insertOrder)
            .then(orders => {
                orderId = orders[0]._id;
                return supertest(app).get(`/orders/${orderId}`).expect(200);
            })
            .then(response => {
                const order = response.body;
                expect(order.userId).toBe(insertOrder[0].userId);
                expect(order.foodsId).toBe(insertOrder[0].foodsId);
                expect(order.amount).toBe(insertOrder[0].amount);
                expect(order.status).toBe(insertOrder[0].status);
                expect(order.time).toBe(insertOrder[0].time);
            });
    });

    test('GET /users', () => {
        return User.insertMany(insertUser)
            .then(() => supertest(app).get('/users').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertUser.length);

                response.body.forEach((user, index) => {
                    expect(user.firstName).toBe(insertUser[index].firstName);
                    expect(user.lastName).toBe(insertUser[index].lastName);
                    expect(user.email).toBe(insertUser[index].email);
                    expect(user.phone).toBe(insertUser[index].phone);
                    expect(user.zip).toBe(insertUser[index].zip);
                    expect(user.city).toBe(insertUser[index].city);
                    expect(user.address).toBe(insertUser[index].address);
                });
            });
    });

    test('GET /users/:id', () => {
        let userId;
        return User.insertMany(insertUser)
            .then(users => {
                userId = users[0]._id;
                return supertest(app).get(`/users/${userId}`).expect(200);
            })
            .then(response => {
                const user = response.body;
                expect(user.firstName).toBe(insertUser[0].firstName);
                expect(user.lastName).toBe(insertUser[0].lastName);
                expect(user.email).toBe(insertUser[0].email);
                expect(user.phone).toBe(insertUser[0].phone);
                expect(user.zip).toBe(insertUser[0].zip);
                expect(user.city).toBe(insertUser[0].city);
                expect(user.address).toBe(insertUser[0].address);
            });
    });
});