const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UserController = require("../controllers/users/UserControllers");
const BlogController = require("../controllers/blogs/BlogController");
const BrandController=require("../controllers/brands/BrandController");
const router = express.Router();


//UserProfile Endpoint

router.post("/Registration", UserController.Registration);
router.post("/Login", UserController.Login);

//TOKEN NEEDED
router.post("/ProfileUpdate", AuthVerifyMiddleware, UserController.ProfileUpdate);
router.post("/ProfileDetails", AuthVerifyMiddleware, UserController.ProfileDetails);
//TOKEN NOT NEEDED
router.get("/RecoverVerifyEmail/:email", UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOtp/:email/:otp", UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UserController.RecoverResetPass);


//BlogEndPoint Start
router.post("/CreateBlog", AuthVerifyMiddleware, BlogController.CreateBlog);
router.get("/AllBlogList", BlogController.AllBlog);


router.post("/BlogUpdate", AuthVerifyMiddleware, BlogController.BlogUpdate);
router.get("/BlogDelete/:id", AuthVerifyMiddleware, BlogController.BlogDelete);

//DONT NEED AUTH
router.get("/searchBlogSlug/:slug", BlogController.BlogDetailsBySlug);
router.post("/FilterByBlog", BlogController.FilterByCategory);

//SEND MAIL API FROM USER
router.post("/sendMail",UserController.SendMail);

//BrandLOGO API
router.post("/logoUpload",BrandController.uploadBrand);
router.post("/createFeature",BrandController.createFeature);
router.get("/getAllAccordion",BrandController.allAccordion);
router.post("/createService",BrandController.createService);
module.exports = router;