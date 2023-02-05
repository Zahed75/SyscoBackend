const DeleteBrandService=async(Request,BlogDb)=>{
    try{
        let id=Request.params.id;
        let Query={_id:id};
        BlogDb.remove(Query)
        return{status:"User Update SuccessFully!",data:data}
    }
    catch(error){
        return {status:"Failed",data:error.toString()}
    }

}

module.exports=DeleteBrandService;