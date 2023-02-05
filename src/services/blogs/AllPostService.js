const AllPostService = async (Request, BlogDb) => {
    try {
        let PostBody = Request.body;
        let data = await BlogDb.find(PostBody)
        return {status: "success", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = AllPostService