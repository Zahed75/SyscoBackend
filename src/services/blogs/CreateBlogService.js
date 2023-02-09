const CreateBlogService=async (Request,BlogDb)=>{
    try{
        let PostBody=Request.body;
        PostBody.email=Request.headers['email']

        let data=await BlogDb.create(PostBody)
        return {status:"success",data:data}

    }
    catch (error){
        return {status:"Failed",data:error.toString()}
    }
}


module.exports=CreateBlogService



// RAW Algo for slug field
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
//
// const createSlug = title => {
//     return title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/^-+|-+$/g, "");
// };
//
// const addBlogPost = async (title, content) => {
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     await client.connect();
//     const db = client.db("test");
//     const blogPosts = db.collection("blogposts");
//     const slug = createSlug(title);
//     const result = await blogPosts.insertOne({ title, content, slug });
//     console.log(`Inserted blog post with id: ${result.insertedId}`);
//     client.close();
// };
