const FilterBlogService=async(Request,BlogDb)=>{
    try{
        let catId=Request.params.id;
        let data =await  BlogDb.find({catId})

        return {status:"success",data:data}
    } catch (error){
        return {status: "Failed", data: error.toString()}
    }
}

module.exports=FilterBlogService