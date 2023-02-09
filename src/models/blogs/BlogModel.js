const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const User=require("../../models/users/UserModel")
mongoose.plugin(slug);
const DataSchema = mongoose.Schema({
    email: {
       type:mongoose.Types.ObjectId,
        ref:"users",
        type:String

    },

    blogTitle: {
        type:String,
        trim: true,
        required: [true, 'Please enter the blog title'],
        max: 220,


    },
    category:{
        type:String,
        require:[true,"Please Enter the category!"],
        max:75,
    },

    slug: { type: String, slug: "blogTitle",unique:true},

    blogImg: {
        type: String
    },

    blogDescription: {
        type: String,
        max: 5000,
        required: [true, 'Please Enter the blog descriptions']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }

},{timestamps:true})

const BlogModel = mongoose.model('blogs', DataSchema);
module.exports = BlogModel,User