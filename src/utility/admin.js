// const PORT = 3000
//
// const start = async () => {
//     const app = express()
//
//     const admin = new AdminJS({})
//
//     const adminRouter = AdminJSExpress.buildRouter(admin)
//     app.use(admin.options.rootPath, adminRouter)
//
//
//
//
//     app.listen(PORT, () => {
//         console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
//     })
// }
//
// start()
//
//
// // ADMIN AUTH
//
//
// const DEFAULT_ADMIN = {
//     email: 'admin@example.com',
//     password: 'password',
// }
//
// const authenticate = async (email, password) => {
//     if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//         return Promise.resolve(DEFAULT_ADMIN)
//     }
//     return null
// }
//
// const startAuth = async () => {
//     const app = express()
//
//     const admin = new AdminJS({})
//
//     const ConnectSession = Connect(session)
//     const sessionStore = new ConnectSession({
//         conObject: {
//             connectionString: 'postgres://adminjs:adminjs@localhost:5435/adminjs',
//             ssl: process.env.NODE_ENV === 'production',
//         },
//         tableName: 'session',
//         createTableIfMissing: true,
//     })
//
//     const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
//         admin,
//         {
//             authenticate,
//             cookieName: 'adminjs',
//             cookiePassword: 'sessionsecret',
//         },
//         null,
//         {
//             store: sessionStore,
//             resave: true,
//             saveUninitialized: true,
//             secret: 'sessionsecret',
//             cookie: {
//                 httpOnly: process.env.NODE_ENV === 'production',
//                 secure: process.env.NODE_ENV === 'production',
//             },
//             name: 'adminjs',
//         }
//     )
//     app.use(admin.options.rootPath, adminRouter)
//
//     // app.listen(PORT, () => {
//     //     console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
//     // })
// }
//
// startAuth()
