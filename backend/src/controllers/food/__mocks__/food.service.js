const foodService = jest.mock('./food.service');

let mockData;

foodService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p._id === id) ) 
);

foodService.__setMockData = data => mockData = data;

module.exports = foodService;