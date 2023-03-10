const app = require("./app");
const initAdminJS=require("./src/adminjs/index")
const PORT = process.env.PORT || 3000
const {connectWithDb} =require("./src/utility/mongo")


const start = async (server) => {
    await connectWithDb();

    initAdminJS(server);

    server.listen(PORT, async () => {
        console.log('app is running on port', PORT);

    });
};

start(app);



// app.listen(PORT, function () {
//     console.log("App Run @8080")
// })