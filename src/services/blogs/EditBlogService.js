const EditBlogService = async (Request, BlogDb) => {
    try {
        let data=await  BlogDb.updateOne({email:Request.headers['email']},Request.body)


        return {status: "Blog Update SuccessFully!", data: data}

    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = EditBlogService;