const DeleteBlogService=async(Request, BlogDb)=>{
    try{
        let data=await  BlogDb.remove({email:Request.headers['email']},Request.body)

        return{status:"Blog Remove SuccessFully!",data:data}
    }
    catch(error){
        return {status:"Failed",data:error.toString()}
    }

}

module.exports=DeleteBlogService;