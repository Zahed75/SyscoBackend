const UserUpdateService=async (Request,DataModel)=>{
    try{
        let data=await  DataModel.updateOne({email:Request.headers['email']},Request.body)

        return{status:"User Update SuccessFully!",data:data}
    }
    catch (error){
        return {status:"Failed",data:error.toString()}
    }
}

module.exports= UserUpdateService