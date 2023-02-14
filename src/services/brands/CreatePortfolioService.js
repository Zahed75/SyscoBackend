const CreatePortfolioService=async (Request,PortfolioModel)=>{
    try{
        let PostBody=Request.body;
        let data=await PortfolioModel.create(PostBody)
        return {status:"success",data:data}

    }
    catch (error){
        return {status:"Failed",data:error.toString()}
    }
}

module.exports=CreatePortfolioService;
