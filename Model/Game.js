const mongoose = require('mongoose');


const GameSchema = mongoose.Schema({
        GameName : {type :String},
        GameCompany : {type :String},
        GamePictureUrl : {type :String}
});

module.exports = mongoose.model('Game',GameSchema)