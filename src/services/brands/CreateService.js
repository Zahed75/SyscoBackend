const CreateService=async (Request,serviceModel)=>{
    try {
        let PostBody = Request.body;
        let data = await serviceModel.create(PostBody)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports=CreateService;