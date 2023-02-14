const PortfolioModel = require("../../models/brands/PortfolioModel");
const CreatePortfolioService = require("../../services/brands/CreatePortfolioService");
const GetAllPortfolioService = require("../../services/brands/GetAllPortfolioService");
const SearchPortfolioBySlug = require("../../services/brands/SearchPortfolioBySlug");

//Create Portfolio

exports.createPortfolio = async (req, res) => {
    let Result = await CreatePortfolioService(req, PortfolioModel)
    res.status(200).json(Result);
}


//GetAll Portfolio
exports.getAllPortfolio = async (req, res) => {
    let Result = await GetAllPortfolioService(req, PortfolioModel)
    res.status(200).json(Result);
}


//SearchPortfolioBySlug
exports.searchPortfolio = async (req, res) => {
    let Result = await SearchPortfolioBySlug(req, PortfolioModel)
    res.status(200).json(Result);
}