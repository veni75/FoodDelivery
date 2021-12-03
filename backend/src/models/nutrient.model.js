const mongoose = require('mongoose');

const NutrientSchema = mongoose.Schema({
    _id: Number,
    foodName: {
        type: String,
        required: true
    },
    foodGroup: {
        type: String,
        required: true
    },
    Avitamin: Number,
    B1vitamin: Number,
    B2vitamin: Number,
    B3vitamin: Number,
    B5vitamin: Number,
    B6vitamin: Number,
    B12vitamin: Number,
    Cvitamin: Number,
    Dvitamin: Number,
    Evitamin: Number,
    Kvitamin: Number,
    folat: Number,
    kalcium: Number,
    rez: Number,
    vas: Number,
    magnezium: Number,
    mangan: Number,
    foszfor: Number,
    kalium: Number,
    szelen: Number,
    natrium: Number,
    cink: Number,
    omegaharom: Number,
    omegahat: Number,
    telitett: Number,
    szenhidrat: Number,
    rost: Number,
    kemenyito: Number,
    feherje: Number,
    cisztein: Number,
    hisztidin: Number,
    izoleucin: Number,
    leucin: Number,
    lizin: Number,
    metionin: Number,
    fenilAlanin: Number,
    treonin: Number,
    triptofan: Number,
    tirozin: Number,
    valin: Number,
    zsir: Number
}, {
    timeStamps: true
});

module.exports = mongoose.model('Nutrient', NutrientSchema);