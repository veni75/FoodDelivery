const express = require('express');
const createError = require('http-errors');

const billService = require('./bill.service');

exports.findAll = (req, res, next) => {
    return billService.findAll()
        .then(bill => {
            res.json(bill);
        });
};

exports.findOne = (req, res, next) => {
    return billService.findOne(req.params.id)
        .then(bill => {
            if (!bill) {
                return next(new createError.NotFound("Bill is not found"));
            }
            res.json(bill);
        });
};

exports.create = async(req, res, next) => {
    const { orderId, amount, status } = req.body;
    if (!orderId || !amount || !status) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const bills = await billService.findAll();    
    const sortedBills = [...bills].sort((a, b) => a._id > b._id);    
    const id = sortedBills[sortedBills.length - 1]._id + 1;
    
    const newBill = {
        _id: id,
        orderId: orderId,
        amount: amount,
        status: status
    };

    return billService.create(newBill)
        .then(bill => {
            res.status(201);
            res.json(bill);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { orderId, amount, status } = req.body;

    if (!orderId || !amount || !status) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const update = {
        orderId: orderId,
        amount: amount,
        status: status
    };
    return billService.update(id, update)
        .then(bill => {
            res.json(bill);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return billService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};