const BlogDb = require("../../models/blogs/BlogModel");
const CreateBlogService = require("../../services/blogs/CreateBlogService");
const AllBlogService = require("../../services/blogs/AllPostService");
const EditBlogService = require("../../services/blogs/EditBlogService");
const DeleteBlogService = require("../../services/blogs/DeleteBlogService");


// CreateBlog
exports.CreateBlog = async (req, res) => {
    let Result = await CreateBlogService(req, BlogDb)
    res.status(200).json(Result)
}


//All Blogs
exports.AllBlog = async (req, res) => {
    let Result = await AllBlogService(req, BlogDb)
    res.status(200).json(Result)
}

//Edit Blog
exports.BlogUpdate = async (req, res) => {
    let Result = await EditBlogService(req, BlogDb)
    res.status(200).json(Result)
}

//Delete Blog
exports.BlogDelete = async (req, res) => {
    let Result = await DeleteBlogService(req, BlogDb)
    res.status(200).json(Result)
}