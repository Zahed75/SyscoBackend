const brandLogo = require("../../models/brands/HomeModel");
const acoDb = require("../../models/brands/AccordionModel")
const BrandLogoService = require("../../services/brands/BrandLogoService");
const SyscoFeatureService = require("../../services/brands/SyscoFeatureCreateService");
const GetAllSyscoFeatures = require("../../services/brands/GetAllSyscoFeatures");

//Upload Logo

exports.uploadBrand = async (req, res) => {
    let Result = await BrandLogoService(req, brandLogo)
    res.status(200).json(Result);
};

//Create Sysco Feature

exports.createFeature = async (req, res) => {
    let Result = await SyscoFeatureService(req, acoDb)
    res.status(200).json(Result);
}

//Get All Accordion

exports.allAccordion = async (req, res) => {
    let Result = await GetAllSyscoFeatures(req, acoDb)
    res.status(200).json(Result);
}