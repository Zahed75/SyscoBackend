const OTPSModel=require("../../models/users/OTPSModel");

const UserResetPassService=async (Request,DataModel)=>{
    let email=Request.body['email']
    let OTPCode=Request.body['OTP']
    let NewPass=Request.body['password']
    let statusUpdate=1;
    try{
        let OTPUsedCount=await OTPSModel.aggregate([
            {$match:{email:email,otp:OTPCode,status:statusUpdate}}
        ])
        if(OTPUsedCount.length>0){
            let PassUpdate=await DataModel.updateOne({email:email},{password:NewPass})
            return{status:"Otp verified success",data:PassUpdate}
        }
        else{
            return {status:"Failed",data:"Invalid Request"}
        }
    }
    catch (e){
        return {status:"failed",data:error.toString()}
    }
}

module.exports=UserResetPassService