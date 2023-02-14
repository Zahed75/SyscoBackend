const brandLogo = require("../../models/brands/HomeModel");
const acoDb = require("../../models/brands/AccordionModel")
const serviceModel = require("../../models/brands/ServiceModel");
const BrandLogoService = require("../../services/brands/BrandLogoService");
const SyscoFeatureService = require("../../services/brands/SyscoFeatureCreateService");
const GetAllSyscoFeatures = require("../../services/brands/GetAllSyscoFeatures");
const CreateService=require("../../services/brands/CreateService");
const GetAllService=require("../../services/brands/GetAllService");
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

//Create Service

exports.createService = async (req, res) => {
    let Result = await CreateService (req, serviceModel)
    res.status(200).json(Result);
}

//getallService

exports.allService = async (req, res) => {
    let Result = await GetAllService(req, acoDb)
    res.status(200).json(Result);
}