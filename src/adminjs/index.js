const AdminJS = require('adminjs');
const PORT = process.env.PORT || 8080;
const AdminJSExpress = require('@adminjs/express');
const AdminJSMonggoose = require('@adminjs/mongoose');
const models = require('../models');
const BlogModel = require('../adminjs/resources/BlogAdmin');
const mongoStore = require('connect-mongo');

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
  const DBModels = { ...models, BlogModel };
  const adminModels = Object.values(DBModels).map((value) => value);
  console.log('check', adminModels);

  AdminJS.registerAdapter({
    Resource: AdminJSMonggoose.Resource,
    Database: AdminJSMonggoose.Database,
  });

  const adminOptions = {
    resources: adminModels,
    branding: {
      logo: '/public/assets/images/syscomatic.png',
      companyName: 'Syscomatic',
      favicon: '/public/favicon.ico',
      withMadeWithLove: false,
    },
  };

  const admin = new AdminJS(adminOptions);
  const sessionStore = mongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/sysco_hall',
    collectionName: 'adminJsSession',
    ttl: 14 * 24 * 60 * 60,
  });
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'Adminjs',
      cookiePassword: 'Secret',
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: 'Secret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'adminjs',
    }
  );

  app.use(admin.options.rootPath, adminRouter);

  console.log(
    `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
  );
};

module.exports = initAdminJS;
