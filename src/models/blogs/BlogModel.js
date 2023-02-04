const mongoose=require("mongoose");
const BlogSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'users',
    }

})