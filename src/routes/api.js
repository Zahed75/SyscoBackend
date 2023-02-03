const express = require('express');
const ProfileController=require("../controllers/users/ProfileController")
const AuthVerifyMiddleware=require("../middlewares/AuthVerifyMiddleware")
const router = express.Router();


//API ENDPOINT

router.post("/registrations",ProfileController.register)
router.post("/login",ProfileController.Login)


module.exports = router;