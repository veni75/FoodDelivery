const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const nutrientController = require('./nutrient.controller');
const nutrientService = require('./nutrient.service');

jest.mock('./nutrient.service');

describe("nutrient controler", () => {
    const mockData = [{
        "_id": 1,
        "foodName": "mandula",
        "foodGroup": "olajos mag",
        "Avitamin": "2",
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
        "Avitamin": "66",
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
    },
    {
        "_id": 3,
        "foodName": "chia",
        "foodGroup": "olajos mag",
        "Avitamin": "44",
        "B1vitamin": "0.18",
        "B2vitamin": "0.04",
        "B3vitamin": "6.13",
        "B5vitamin": "0.595",
        "B6vitamin": "1.394",
        "B12vitamin": "0",
        "Cvitamin": "1.6",
        "Dvitamin": "0",
        "Evitamin": "0.5",
        "Kvitamin": "708.9",
        "folat": "49",
        "kalcium": "631",
        "rez": "0.924",
        "vas": "16.4",
        "magnezium": "390",
        "mangan": "2.723",
        "foszfor": "860",
        "kalium": "407",
        "szelen": "55.2",
        "natrium": "16",
        "cink": "4.58",
        "omegaharom": "17.83",
        "omegahat": "5.835",
        "telitett": "3.776",
        "szenhidrat": "42.12",
        "rost": "34.4",
        "kemenyito": "6.08",
        "feherje": "16.54",
        "cisztein": "0.407",
        "hisztidin": "0.531",
        "izoleucin": "0.801",
        "leucin": "1.371",
        "lizin": "0.97",
        "metionin": "0.588",
        "fenilAlanin": "1.016",
        "treonin": "0.709",
        "triptofan": "0.436",
        "tirozin": "0.563",
        "valin": "0.95",
        "zsir": "30.74"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        nutrientService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const NUTRIENT_ID = 1;

        const request = mockRequest({
            params: {
                id: NUTRIENT_ID
            }
        });

        return nutrientController.findOne(request, response, nextFunction)
            .then( () => {
                expect(nutrientService.findOne).toBeCalledWith(NUTRIENT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === NUTRIENT_ID)
                );                
            })
    });
}); 