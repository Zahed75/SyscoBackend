const CreateBlogService=async (Request,BlogModel)=>{
    try{
        let PostBody=Request.body;
        PostBody.email=Request.headers['email']
        let data=await BlogModel.create(PostBody)
        return {status:"success",data:data}

    }
    catch (error){
        return {status:"Failed",data:error.toString()}
    }
}


module.exports=CreateBlogService