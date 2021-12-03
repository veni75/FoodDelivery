const Nutrient = require('../../models/nutrient.model');

exports.create = nutrientData => {
    const nutrient = new Nutrient(nutrientData);
    return nutrient.save();
};

exports.findAll = () => Nutrient.find();

exports.findOne = id => Nutrient.findById(id);

exports.update = (id, updateData) => Nutrient.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Nutrient.findByIdAndRemove(id); 