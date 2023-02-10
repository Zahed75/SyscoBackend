const BlogDetailsBySlugService = async (Request, BlogDb) => {
    try {
        let slug = Request.params.slug;
        console.log("slug",slug)
        // let email = Request.headers['email'];
        // console.log("check user",email)
        let data = await BlogDb.aggregate([
            {$match: {slug: slug}}

        ])
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}


module.exports = BlogDetailsBySlugService;