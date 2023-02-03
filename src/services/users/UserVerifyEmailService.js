const OTPSModel=require("../../models/users/OTPSModel");
const SendEmailUtility=require("../../utility/SendEmailUtility");


const UserVerifyEmailService=async (Request,DataModel)=>{
    try{
    // Email Account Query
        let email=Request.params.email;
        let OTPCode=Math.floor(100000+Math.random()*900000)
        let UserCount=(await DataModel.aggregate([{$match:{email:email}},{$count:"total"}]))
        if(UserCount.length>0){ //User Search
            //OTP Insert
            await OTPSModel.create({email:email,otp:OTPCode})
            //Email Send
            let SendEmail=await  SendEmailUtility(email,"Your Pin Code is="+OTPCode,"Syscomatic Blog App Pin Verification")
            return {status:"Success",data:SendEmail}
        }
        else{
            return {status:"Failed",data:"No User Found"}
        }
    }
    catch (error){
        return{status:"Failed",data:error.toString()}
    }
}

module.exports=UserVerifyEmailService