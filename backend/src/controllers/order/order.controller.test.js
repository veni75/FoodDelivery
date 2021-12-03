const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const orderController = require('./order.controller');
const orderService = require('./order.service');

jest.mock('./order.service');

describe("order controller", () => {
    const mockData = [{ "_id": 1, "userId": 1, "foodId": 11, "amount": 768, "status": "új","time":"2021-07-12" },
    { "_id": 2, "userId": 14, "foodId": 3, "amount": 734, "status": "teljesítve","time":"2021-07-13" },
    { "_id": 3, "userId": 19, "foodId": 9, "amount": 626, "status": "új","time":"2021-07-10" },
    { "_id": 4, "userId": 16, "foodId": 1, "amount": 567, "status": "teljesítve","time":"2021-07-08/" },
    { "_id": 5, "userId": 1, "foodId": 3, "amount": 639, "status": "új" ,"time":"2021-07-12"}];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        orderService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ORDER_ID = 1;

        const request = mockRequest({
            params: {
                id: ORDER_ID
            }
        });

        return orderController.findOne(request, response, nextFunction)
            .then( () => {
                expect(orderService.findOne).toBeCalledWith(ORDER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === ORDER_ID)
                );                
            })
    });
}); 