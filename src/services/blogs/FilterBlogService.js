const FilterBlogService = async (Request, BlogDb) => {
    try {
      let id=Request.body.id;
      let category=Request.body.category;
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













