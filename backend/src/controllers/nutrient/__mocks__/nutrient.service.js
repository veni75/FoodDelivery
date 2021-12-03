const nutrientService = jest.mock('./nutrient.service');

let mockData;

nutrientService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

nutrientService.__setMockData = data => mockData = data;

module.exports = nutrientService;