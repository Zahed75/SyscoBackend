const GetAllPortfolioService=async (Request,PortfolioModel)=>{
    try {

        let data = await PortfolioModel.find()
        return {status: "success", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports=GetAllPortfolioService;