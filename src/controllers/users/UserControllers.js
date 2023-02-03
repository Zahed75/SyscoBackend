const DataModel = require("../../models/users/UserModel");
const OTPSModel = require("../../models/users/OTPSModel");

const UserCreateService = require("../../services/users/UserCreateService");
const UserLoginService = require("../../services/users/UserLoginService");
const UserUpdateService = require("../../services/users/UserUpdateService");
const UserDetailsService = require("../../services/users/UserDetailsService");
const UserResetPassService = require("../../services/users/UserResetPassService");
const UserVerifyOtpService = require("../../services/users/UserVerifyOtpService");
const UserVerifyEmailService = require("../../services/users/UserVerifyEmailService");


// User Registrations
exports.Registration = async (req, res) => {
    let Result = await UserCreateService(req, DataModel)
    res.status(200).json(Result)
}

//User Login

exports.Login = async (req, res) => {
    let Result = await UserLoginService(req, DataModel)
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

