const express = require('express');
const createError = require('http-errors');

const userService = require('./user.service');

// Create a new user.
exports.create = async (req, res, next) => {
    const { lastName, firstName, email, phone, zip, city, address, password, role } = req.body;


    if (!lastName || !firstName || !email ||!phone ||!zip || !city || !address ) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const users = await userService.findAll();
    const sortedUsers = [...users].sort((a, b) => a._id > b._id);
    const id = sortedUsers[sortedUsers.length - 1]._id + 1;
    const newUser = {
        _id:id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        zip: zip,
        city: city,
        address:address,
        password: password,
        role: role
    };

    return userService.create(newUser)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return userService.findAll()
        .then( user => {
            res.json(user);
        });
};

exports.findOne = (req, res, next) => {
    return userService.findOne(req.params.id)
        .then( user => {
            if (!user) {
                return next(new createError.NotFound("Person is not found"));
            }
            res.json(user);
        });
};

exports.update = (req, res, next) => {
    
    const id = req.params.id;
    const { lastName, firstName, email, phone, zip, city, address,password,role } = req.body;
    
    if (!lastName || !firstName || !email||!phone||!zip || !city || !address) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const update = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        zip: zip,
        city: city,
        address: address,
        password: password,
        role:role
    };
    return userService.update(id, update)
        .then(user => {
            res.json(user);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return userService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};