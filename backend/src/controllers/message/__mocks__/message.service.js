const messageService = jest.mock('./message.service');

let mockData;

messageService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p._id === id) ) 
);

messageService.__setMockData = data => mockData = data;

module.exports = messageService;