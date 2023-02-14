const mongoose = require('mongoose');
const Accordion = mongoose.Schema({
    syscoDescription: {
        type: String,
        max: 7000

    },
    syscoFeatures: {
        title:{
            type:String,
            max:500
        },
        description:{
            type:String,
            max:7000
        }

    }

})

const accordion = mongoose.model('accordion', Accordion)
module.exports=accordion;