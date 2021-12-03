const Message = require('../../models/message.model');

exports.create = messageData => {
    const message = new Message(messageData);
    return message.save();
};

exports.findAll = () => Message.find();

exports.findOne = id => Message.findById(id);

exports.update = (id, updateData) => Message.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Message.findByIdAndRemove(id); 