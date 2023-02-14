const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const buffer = require("buffer");

mongoose.plugin(slug);
const PortfolioSchema = mongoose.Schema({
    projectTitle: {
        type: String,
        max: 400,
        require: [true, "Please Enter project title"]
    },
    portfolioImage: {
        data: buffer,
        contentType: String
    },
    slug: {
        type: String,
        slug: "projectTitle",
        unique: true
    },
    projectDescription: {
        type: String,
        max: 9000,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
}, {versionKey: false})

const Portfolio = mongoose.model('portfolio', PortfolioSchema)
module.exports = Portfolio;