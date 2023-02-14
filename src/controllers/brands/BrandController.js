const brandLogo = require("../../models/brands/HomeModel");
const BrandLogoService = require("../../services/brands/BrandLogoService");


//Upload Logo

exports.uploadBrand = async (req, res) => {
    let Result = await BrandLogoService(req, brandLogo)
    res.status(200).json(Result);
};