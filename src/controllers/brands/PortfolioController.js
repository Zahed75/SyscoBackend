const PortfolioModel=require("../../models/brands/PortfolioModel");
const CreatePortfolioService=require("../../services/brands/CreatePortfolioService");



//Create Portfolio

exports.createPortfolio = async (req, res) => {
    let Result = await CreatePortfolioService(req, PortfolioModel)
    res.status(200).json(Result);
}
