const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const billController = require('./bill.controller');
const billService = require('./bill.service');

jest.mock('./bill.service');

describe("bill controler", () => {
    const mockData = [{ "_id": 1, "orderId": 17, "amount": 639, "status": "új" },
    { "_id": 2, "orderId": 5, "amount": 598, "status": "új" },
    { "_id": 3, "orderId": 5, "amount": 859, "status": "új" },
    { "_id": 4, "orderId": 17, "amount": 589, "status": "fizetve" },
    { "_id": 5, "orderId": 4, "amount": 798, "status": "fizetve" }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        billService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const BILL_ID = 1;

        const request = mockRequest({
            params: {
                id: BILL_ID
            }
        });

        return billController.findOne(request, response, nextFunction)
            .then( () => {
                expect(billService.findOne).toBeCalledWith(BILL_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === BILL_ID)
                );                
            })
    });
}); 