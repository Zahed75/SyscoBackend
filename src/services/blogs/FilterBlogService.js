const FilterBlogService = async (Request, BlogDb) => {
    try {
      let id=Request.params.id;
      let category=Request.params.category;
      let data=await  BlogDb.aggregate([
          {$match:{id:id,category:category}}
      ])
        console.log("check",data)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }
}

module.exports = FilterBlogService













