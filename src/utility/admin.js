const AdminJS = require('adminjs');
const PORT = process.env.PORT || 8080
const AdminJSExpress = require('@adminjs/express');
const AdminJSMonggoose = require('@adminjs/mongoose');
const models =require ('../models');


const DEFAULT_ADMIN = {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'admin',
};

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
};

const initAdminJS = (app) => {
    const adminModels = Object.values(models).map((value) => value);
    console.log("check",adminModels)

    AdminJS.registerAdapter({
        Resource: AdminJSMonggoose.Resource,
        Database: AdminJSMonggoose.Database,
    });

    const adminOptions = {
        resources: adminModels,
    };

    const admin = new AdminJS(adminOptions);
    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'Z@hed1234',
    });



    app.use(admin.options.rootPath, adminRouter);


    console.log(
       ` AdminJS started on http://localhost":${PORT}${admin.options.rootPath}`
    );
};

module.exports=initAdminJS;