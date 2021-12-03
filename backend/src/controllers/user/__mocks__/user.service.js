const userService = jest.mock('./user.service');

let mockData;

userService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p._id === id) ) 
);

userService.__setMockData = data => mockData = data;

module.exports = userService;