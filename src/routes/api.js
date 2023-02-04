const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UserController = require("../controllers/users/UserControllers");
const router = express.Router();


//UserProfile Endpoint

router.post("/Registration", UserController.Registration)
router.post("/Login", UserController.Login)
//TOKEN NEEDED

router.post("/ProfileUpdate", AuthVerifyMiddleware, UserController.ProfileUpdate)
router.post("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails)
//TOKEN NOT NEEDED
router.get("/RecoverVerifyEmail/:email",UserController.RecoverVerifyEmail)
router.get("/RecoverVerifyOtp/:email/:otp",UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserController.RecoverResetPass);
module.exports = router;