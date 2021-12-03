const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const foodController = require('./food.controller');
const foodService = require('./food.service');

jest.mock('./food.service');

describe("food controller", () => {
    const mockData = [{
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
    },
    {
        "_id": 4,
        "foodName": "Tojásos galuska",
        "ingredients": [
            "búzaliszt",
            "tojás",
            "tejföl",
            "só"
        ],
        "category": "vegetarianus",
        "active": true,
        "price": 1065,
        "image": "../../../assets/images/4galuska.jpg"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        foodService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const FOOD_ID = 1;

        const request = mockRequest({
            params: {
                id: FOOD_ID
            }
        });

        return foodController.findOne(request, response, nextFunction)
            .then( () => {
                expect(foodService.findOne).toBeCalledWith(FOOD_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === FOOD_ID)
                );                
            })
    });
}); 