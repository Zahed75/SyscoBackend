const BlogDetailsBySlugService=async(Request,BlogDb)=>{
    try{
        let slug=Request.params.slug;
        BlogDb.aggregate([
            {$match:{slug:slug}},
            {
                $project:{
                    _id:1,slug:1,
                    createdDate:{
                        date: "$brandCreated",
                        format: "%d-%m-%Y"
                    }
                }
            }
        ])
    }
    catch(error){

    }
}


module.exports=BlogDetailsBySlugService;