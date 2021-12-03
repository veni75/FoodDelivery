const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id: Number,
    userId: {
        type: Number,
        required: true
    },
    foodId: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Order', OrderSchema);