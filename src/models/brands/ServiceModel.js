const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
    serviceInfo: {
        title: {
            type: String,
            max: 400
        },
        description: {
            type: String,
            max: 7000
        }
    },
    serviceIcon: {
        logo: {
            type: String,

        },
        title: {
            type: String,
            max: 650
        },
        description: {
            type: String,
            max: 7000
        }
    }
}, {versionKey: false})

const Service = mongoose.model('service', ServiceSchema)
module.exports = Service;