const billService = jest.mock('./bill.service');

let mockData;

billService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p._id === id) ) 
);

billService.__setMockData = data => mockData = data;

module.exports = billService;