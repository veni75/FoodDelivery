const express = require('express');
const createError = require('http-errors');

const orderService = require('./order.service');

// Create a new order.
exports.create = async(req, res, next) => {
    const { userId, foodId, amount, status, time } = req.body;


    if (!userId || !foodId || !amount || !status || !time) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const orders = await orderService.findAll();
    const sortedOrders = [...orders].sort((a, b) => a._id > b._id);
    const id = sortedOrders[sortedOrders.length - 1]._id + 1;
    const newOrder = {
        _id:id,
        userId: userId,
        foodId: foodId,
        amount: amount,
        status: status,
        time: time,
    };

    return orderService.create(newOrder)
        .then(order => {
            res.status(201);
            res.json(order);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return orderService.findAll()
        .then( order => {
            res.json(order);
        });
};

exports.findOne = (req, res, next) => {
    return orderService.findOne(req.params.id)
        .then( order => {
            if (!order) {
                return next(new createError.NotFound("Order is not found"));
            }
            res.json(order);
        });
};

exports.update = (req, res, next) => {
    
    const id = req.params.id;
    const { userId, foodId, amount, status } = req.body;
    

    if (!userId || !foodId || !amount || !status) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const update = {
        userId: userId,
        foodId: foodId,
        amount: amount,
        status: status
    };
    return orderService.update(id, update)
        .then(order => {
            res.json(order);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return orderService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};