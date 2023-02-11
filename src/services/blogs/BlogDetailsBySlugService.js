const BlogDetailsBySlugService = async (Request, BlogDb) => {
    try {
        let slug = Request.params.slug;
        console.log("slug",slug)

        // let data = await BlogDb.aggregate([
        //     {$match: {slug: slug}}
        //
        // ])
        let data =await BlogDb.find({slug}).populate("user")
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}


module.exports = BlogDetailsBySlugService

