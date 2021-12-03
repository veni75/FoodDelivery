const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    _id: Number,
    foodName: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Food', FoodSchema);