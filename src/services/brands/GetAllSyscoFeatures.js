const GetAllSyscoFeatures = async (Request, acoDb) => {
    try {

        let data = await acoDb.find()
        return {status: "success", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = GetAllSyscoFeatures;