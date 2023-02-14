const GetAllService=async (Request,serviceModel)=>{
    try {

        let data = await serviceModel.find()
        return {status: "success", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}


module.exports=GetAllService;