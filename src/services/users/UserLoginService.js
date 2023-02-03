const CreateToken = require("../../utility/CreateToken");

const UserLoginService = async (Request, DataModel) => {
    try {
        let data = await DataModel.aggregate([{$match:Request.body},{$project:{_id:0,email:1,name:1,role:1}}])
        if(data.length>0){
            let token=await CreateToken(data[0]['email'])
            return{status:"Success",token:token,data:data[0]}
        }
        else{
            return {status:"User Credentials Not Found!"}
        }
    }
    catch (error){
        return{status:"Failed",data:error.toString()}
    }
}

module.exports=UserLoginService