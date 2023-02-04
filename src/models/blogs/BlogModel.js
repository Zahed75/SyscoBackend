const mongoose=require("mongoose");
const User=require("../users/UserModel")
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

    },
    blogImg:{
        type:String
    },

    blogDescription:{
        type:String,
        max:5000,
        required:[true,'Please Enter the blog descriptions']
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }

})

const BlogModel=mongoose.model('blogs',BlogSchema);
module.exports=BlogModel