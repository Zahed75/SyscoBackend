const DeleteBlogService=async(Request, BlogDb)=>{
    try{
        let id=Request.params.id;
        let Query={_id:id};
        let data=await  BlogDb.remove({Query,email:Request.headers['email']},Request.body)

        return{status:"Blog Remove SuccessFully!",data:data}
    }
    catch(error){
        return {status:"Failed",data:error.toString()}
    }

}

module.exports=DeleteBlogService;


