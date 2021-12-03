const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: Number,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: String,
    role: {
        type: Number,
        default: 2
    },
    token: String,
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);