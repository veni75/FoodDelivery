const express = require('express');
const createError = require('http-errors');
const nutrientModel = require('../../models/nutrient.model');

const nutrientService = require('./nutrient.service');

// Create a new nutrient.
exports.create = async (req, res, next) => {
    const { foodName, foodGroup, Avitamin, B1vitamin, B2vitamin, B3vitamin, B5vitamin, B6vitamin, B12vitamin, Cvitamin, Dvitamin, Evitamin, Kvitamin, folat,
        kalcium,
        rez,
        vas,
        magnezium,
        mangan,
        foszfor,
        kalium,
        szelen,
        natrium,
        cink,
        omegaharom,
        omegahat,
        telitett,
        szenhidrat,
        rost,
        kemenyito,
        feherje,
        cisztein,
        hisztidin,
        izoleucin,
        leucin,
        lizin,
        metionin,
        fenilAlanin,
        treonin,
        triptofan,
        tirozin,
        valin,
        zsir } = req.body;


    if (!foodName || !foodGroup ) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const nutrients = await nutrientService.findAll();
    const sortedNutrients = [...nutrients].sort((a, b) => a._id > b._id);
    const id = sortedNutrients[sortedNutrients.length - 1]._id + 1;
    const newNutrient = {
        _id: id,
        foodName: foodName,
        foodGroup: foodGroup,
        Avitamin: Avitamin,
        B1vitamin: B1vitamin,
        B2vitamin: B2vitamin,
        B3vitamin: B3vitamin,
        B5vitamin: B5vitamin,
        B6vitamin: B6vitamin,
        B12vitamin: B12vitamin,
        Cvitamin: Cvitamin,
        Dvitamin: Dvitamin,
        Evitamin: Evitamin,
        Kvitamin: Kvitamin,
        folat: folat,
        kalcium: kalcium,
        rez: rez,
        vas: vas,
        magnezium: magnezium,
        mangan: mangan,
        foszfor: foszfor,
        kalium: kalium,
        szelen: szelen,
        natrium: natrium,
        cink: cink,
        omegaharom: omegaharom,
        omegahat: omegahat,
        telitett: telitett,
        szenhidrat: szenhidrat,
        rost: rost,
        kemenyito: kemenyito,
        feherje: feherje,
        cisztein: cisztein,
        hisztidin: hisztidin,
        izoleucin: izoleucin,
        leucin: leucin,
        lizin: lizin,
        metionin: metionin,
        fenilAlanin: fenilAlanin,
        treonin: treonin,
        triptofan: triptofan,
        tirozin: tirozin,
        valin: valin,
        zsir: zsir
    };

    return nutrientService.create(newNutrient)
        .then(nut => {
            res.status(201);
            res.json(nut);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return nutrientService.findAll()
        .then(nut => {
            res.json(nut);
        });
};

exports.findOne = (req, res, next) => {
    return nutrientService.findOne(req.params.id)
        .then(nut => {
            if (!nutrientModel) {
                return next(new createError.NotFound("Person is not found"));
            }
            res.json(nut);
        });
};

exports.update = (req, res, next) => {

    const id = req.params.id;
    const { foodName, foodGroup, Avitamin, B1vitamin, B2vitamin, B3vitamin, B5vitamin, B6vitamin, B12vitamin,
        Cvitamin,
        Dvitamin,
        Evitamin,
        Kvitamin,
        folat,
        kalcium,
        rez,
        vas,
        magnezium,
        mangan,
        foszfor,
        kalium,
        szelen,
        natrium,
        cink,
        omegaharom,
        omegahat,
        telitett,
        szenhidrat,
        rost,
        kemenyito,
        feherje,
        cisztein,
        hisztidin,
        izoleucin,
        leucin,
        lizin,
        metionin,
        fenilAlanin,
        treonin,
        triptofan,
        tirozin,
        valin,
        zsir
    } = req.body;

    if (!foodName || !foodGroup || !Avitamin || !B1vitamin || !B2vitamin || !B3vitamin || !B5vitamin || !B6vitamin || !B12vitamin) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    const update = {
        foodName: foodName,
        foodGroup: foodGroup,
        Avitamin: Avitamin,
        B1vitamin: B1vitamin,
        B2vitamin: B2vitamin,
        B3vitamin: B3vitamin,
        B5vitamin: B5vitamin,
        B6vitamin: B6vitamin,
        B12vitamin: B12vitamin,
        Cvitamin: Cvitamin,
        Dvitamin: Dvitamin,
        Evitamin: Evitamin,
        Kvitamin: Kvitamin,
        folat: folat,
        kalcium: kalcium,
        rez: rez,
        vas: vas,
        magnezium: magnezium,
        mangan: mangan,
        foszfor: foszfor,
        kalium: kalium,
        szelen: szelen,
        natrium: natrium,
        cink: cink,
        omegaharom: omegaharom,
        omegahat: omegahat,
        telitett: telitett,
        szenhidrat: szenhidrat,
        rost: rost,
        kemenyito: kemenyito,
        feherje: feherje,
        cisztein: cisztein,
        hisztidin: hisztidin,
        izoleucin: izoleucin,
        leucin: leucin,
        lizin: lizin,
        metionin: metionin,
        fenilAlanin: fenilAlanin,
        treonin: treonin,
        triptofan: triptofan,
        tirozin: tirozin,
        valin: valin,
        zsir: zsir
    };
    return nutrientService.update(id, update)
        .then(nut => {
            res.json(nut);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return nutrientService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};