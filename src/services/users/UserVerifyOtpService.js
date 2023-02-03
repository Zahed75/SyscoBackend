const UserVerifyOtpService = async (Request, DataModel) => {
    try {
        //First Process Databse user data newa

        let email = Request.params.email;
        let OTPCode = Request.params.otp;
        let status = 0;
        let statusUpdate = 1;
        let OTPCount = await DataModel.aggregate([{


            $match: {
                email: email,
                otp: OTPCode,
                status: status
            }
        }, {$count: "total"}])
        if (OTPCount.length > 0) {
            //Second Process Data Update kore dewa
            let OTPUpdate = await DataModel.updateOne({email: email, otp: OTPCode, status: status}, {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            })

            return {status: "Success", data: OTPUpdate}
        } else {
            return {status: "Fail", data: "Invalid OTP Code"}
        }
    } catch (error) {
        return {status: "failed", data: error.toString()}
    }
}

module.exports=UserVerifyOtpService