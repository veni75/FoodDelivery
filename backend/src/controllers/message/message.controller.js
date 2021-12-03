const express = require('express');
const createError = require('http-errors');

const messageService = require('./message.service');

exports.findAll = (req, res, next) => {
    return messageService.findAll()
        .then(message => {
            res.json(message);
        });
};

exports.findOne = (req, res, next) => {
    return messageService.findOne(req.params.id)
        .then(message => {
            if (!message) {
                return next(new createError.NotFound("Message is not found"));
            }
            res.json(message);
        });
};

exports.create = async(req, res, next) => {
    const { email, message } = req.body;
    if (!email || !message) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const messages = await messageService.findAll();    
    const sortedMessages = [...messages].sort((a, b) => a._id > b._id);    
    const id = sortedMessages[sortedMessages.length - 1]._id + 1;
    
    const newMessage = {
        _id: id,
        email: email,
        message: message
    };

    return messageService.create(newMessage)
        .then(message => {
            res.status(201);
            res.json(message);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { email,message } = req.body;

    if (!email || !message) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const update = {
        email: email,
        message: message
    };
    return messageService.update(id, update)
        .then(message => {
            res.json(message);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return messageService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};