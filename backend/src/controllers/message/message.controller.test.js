const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const messageController = require('./message.controller');
const messageService = require('./message.service');

jest.mock('./message.service');

describe("message controller", () => {
    const mockData = [{ "_id": 1, "email": "varga.endre@gmail.com", "message": "1 db húsos rakott karfiolt szeretnék rendelni a Székesfehérvár Tóvárosi lnd. 42. cimre." },
    { "_id": 2, "email": "kiss.ede@gmail.com", "message": "1 db gombás rizseshústt szeretnék rendelni a Székesfehérvár Tóvárosi lnd. 35. cimre." },
    { "_id": 3, "email": "simon.lajos@gmail.com", "message": "1 db húsos tojásos galuskát szeretnék rendelni a Székesfehérvár Palotai u. 88. cimre." }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        messageService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MESSAGE_ID = 1;

        const request = mockRequest({
            params: {
                id: MESSAGE_ID
            }
        });

        return messageController.findOne(request, response, nextFunction)
            .then( () => {
                expect(messageService.findOne).toBeCalledWith(MESSAGE_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === MESSAGE_ID)
                );                
            })
    });
}); 