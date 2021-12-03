const Food = require('../../models/food.model');

exports.create = foodData => {
    const food = new Food(foodData);
    return food.save();
};

exports.findAll = () => Food.find();
exports.findOne = id => Food.findById(id);
exports.findCategory = (mycategory) => Food.find({category:mycategory});

exports.update = (id, updateData) => Food.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Food.findByIdAndRemove(id); 