const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    _id: Number,
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {
        timeStamps: true
    });

module.exports = mongoose.model('message', MessageSchema);