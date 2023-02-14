const DataModel = require("../../models/users/UserModel");
const OTPSModel = require("../../models/users/OTPSModel");

const UserCreateService = require("../../services/users/UserCreateService");
const UserLoginService = require("../../services/users/UserLoginService");
const UserUpdateService = require("../../services/users/UserUpdateService");
const UserDetailsService = require("../../services/users/UserDetailsService");
const UserResetPassService = require("../../services/users/UserResetPassService");
const UserVerifyOtpService = require("../../services/users/UserVerifyOtpService");
const UserVerifyEmailService = require("../../services/users/UserVerifyEmailService");
const UserSendMailService=require("../../services/common/UserSendMailService");

// User Registrations
exports.Registration = async (req, res) => {
    let Result = await UserCreateService(req, DataModel)
    res.status(200).json(Result)
}

//User Login

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req,DataModel)
    res.status(200).json(Result)
}

//User Profile Update

exports.ProfileUpdate = async (req, res) => {
    let Result = await UserUpdateService(req, DataModel)
    res.status(200).json(Result)
}


// User profile Details

exports.ProfileDetails = async (req, res) => {
    let Result = await UserDetailsService(req, DataModel)
    res.status(200).json(Result)
}

// Recover Verify Email

exports.RecoverVerifyEmail = async (req, res) => {
    let Result = await UserVerifyEmailService(req, DataModel)
    res.status(200).json(Result)
}

//Recover OTP

exports.RecoverVerifyOTP = async (req, res) => {
    let Result = await UserVerifyOtpService(req, OTPSModel)
    res.status(200).json(Result)
}

//Reset Password

exports.RecoverResetPass = async (req, res) => {
    let Result = await UserResetPassService(req, DataModel)
    res.status(200).json(Result)
}


//SEND MAIL FROM USER

exports.SendMail=async (req,res)=>{
    let Result=await UserSendMailService(req)
    res.status(200).json(Result);
}

