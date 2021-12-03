const express = require('express');
const createError = require('http-errors');

const foodService = require('./food.service');


exports.findAll = (req, res, next) => {
    return foodService.findAll()
    .then( food => {
        res.json(food);
    });
};

exports.findOne = (req, res, next) => {
    return foodService.findOne(req.params.id)
    .then( food => {
        if (!food) {
            return next(new createError.NotFound("Person is not found"));
        }
        res.json(food);
    });
};

exports.findOneCategory = async (req, res, next) => {
    const mycategory = req.params.category;    
    const foods = await foodService.findCategory(mycategory);        
    res.json(foods);
};

// Create a new food.
exports.create = async(req, res, next) => {
    const { foodName, ingredients, category, price, active, image } = req.body;


    if (!foodName|| !ingredients|| !category|| !price|| !active|| !image) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const foods = await foodService.findAll();    
    const sortedFoods = [...foods].sort((a, b) => a._id > b._id);    
    const id = sortedFoods[sortedFoods.length - 1]._id + 1;
    const newFood = {
        _id:id,
        foodName: foodName,
        ingredients: ingredients,
        category: category,
        price: price,
        active: active,
        image: image
    };

    return foodService.create(newFood)
        .then(food => {
            res.status(201);
            res.json(food);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { foodName, ingredients, category, price, active, image } = req.body;
    
    if (!foodName|| !ingredients|| !category|| !price|| !active|| !image) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        foodName: foodName,
        ingredients: ingredients,
        category: category,
        price: price,
        active: active,
        image: image
    };
    return foodService.update(id, update)
        .then(food => {
            res.json(food);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return foodService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};