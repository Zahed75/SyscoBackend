const SearchPortfolioBySlug = async (Request, PortfolioModel) => {
    try {
        let slug = Request.params.slug;
        console.log("slug", slug)


        let data = await PortfolioModel.find({slug})
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = SearchPortfolioBySlug;