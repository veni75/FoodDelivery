const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    _id: Number,
    orderId: {
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
    }
},
    {
        timeStamps: true
    });

module.exports = mongoose.model('bill', BillSchema);