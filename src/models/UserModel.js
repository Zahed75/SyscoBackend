const mongoose=require('mongoose');
const {model} = require("mongoose");
const DataSchema=mongoose.Schema({
    name:{type:String,max:25},
    photo:{type:String},
    email:{type:String,unique:true},
    password:{type:String,max:6,unique: true}

},{versionKey:false})

const UserModel=mongoose.model('users',DataSchema)

module.exports=UserModel