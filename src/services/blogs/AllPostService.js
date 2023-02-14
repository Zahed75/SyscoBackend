const AllPostService = async (Request, BlogDb) => {
    try {


        let data = await BlogDb.find({}).populate("user", " -password");


        return {status: "success", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = AllPostService




