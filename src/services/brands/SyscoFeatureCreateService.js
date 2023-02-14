const SyscoFeatureCreateService = async (Request, acoDb) => {
    try {
        let PostBody = Request.body;
        let data = await acoDb.create(PostBody)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = SyscoFeatureCreateService;