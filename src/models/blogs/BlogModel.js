const mongoose=require("mongoose");
const users=require("../users/UserModel")
const BlogSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },

    blogTitle:{
        type:String,
        trim:true,
        required:[true,'Please enter the blog title'],
        max:220,

    }


})