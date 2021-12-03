const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const userController = require('./user.controller');
const userService = require('./user.service');

jest.mock('./user.service');

describe("user controler", () => {
    const mockData = [{
        "_id": 1,
        "firstName": "Endre",
        "lastName": "Varga",
        "email": "varga.endre@gmail.com",      
        "phone": "06402445342",
        "zip": 5162,
        "city": "Csór",
        "password": "test",
        "role": 1,
        "token": ""
      },
      {
        "_id": 2,
        "firstName": "Ede",
        "lastName": "Kiss",
        "email": "kiss.ede@gmail.com",      
        "phone": "06405126632",
        "zip": 8600,
        "city": "Mór",
        "password": "test",
        "role": 2,
        "token": ""
      },
      {
        "_id": 3,
        "firstName": "Lajos",
        "lastName": "Simon",
        "email": "simon.lajos@gmail.com",      
        "phone": "06402416563",
        "zip": 5833,
        "city": "Pákozd",
        "password": "test",
        "role": 3,
        "token": ""
      },
      {
        "_id": 4,
        "firstName": "Ilona",
        "lastName": "Varga",
        "email": "varga.ilona@gmail.com",      
        "phone": "06203442655",
        "zip": 1282,
        "city": "Gárdony",
        "password": "test",
        "role": 1,
        "token": ""
      },
      {
        "_id": 5,
        "firstName": "Kinga",
        "lastName": "Papp",
        "email": "papp.kinga@gmail.com",      
        "phone": "06206613624",
        "zip": 8562,
        "city": "Adony",
        "password": "test",
        "role": 2,
        "token": ""
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        userService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return userController.findOne(request, response, nextFunction)
            .then( () => {
                expect(userService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );                
            })
    });
}); 