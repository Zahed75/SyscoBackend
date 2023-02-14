const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

    brandImage: {
        contentType: String
    }


}, {versionKey: false})




const brandLogoModel = mongoose.model('brandLogo', DataSchema);


module.exports = brandLogoModel;