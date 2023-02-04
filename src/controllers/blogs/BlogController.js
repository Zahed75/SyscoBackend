const BlogModel = require("../../models/blogs/BlogModel");


const CreateBlogService = require("../../services/blogs/CreateBlogService");


// CreateBlog

exports.CreateBlog = async (req, res) => {
    let Result = await CreateBlogService(req, BlogModel)
    res.status(200).json(Result)
}

