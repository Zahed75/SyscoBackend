const CreateBlogService=async (Request,BlogDb)=>{
    try{
        let PostBody=Request.body;
        PostBody.email=Request.headers['email']

        let data=await BlogDb.create(PostBody)
        return {status:"success",data:data}

    }
    catch (error){
        return {status:"Failed",data:error.toString()}
    }
}


module.exports=CreateBlogService



