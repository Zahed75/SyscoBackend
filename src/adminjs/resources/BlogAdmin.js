const BLogModel = require("../../models/blogs/BlogModel");
const upload = require('@adminjs/upload')
const path=require('path')
const localProvider = {

    bucket: path.join(__dirname, '../../../public')


};
const BlogModel = {
    resource: BLogModel,
    options: {
        properties: {
            blogDescription: {
                type: 'textarea',
                props: {
                    rows: 10,
                },
            },
        },
    },
    features: [
        upload({
            provider: {local: localProvider},
            properties: {
                file: 'blog-image',
                key: 'blogImg',
                // mimeType: 'application/pdf',
            },
            validation: {mimeTypes: ['image/png','image/jpg', 'application/pdf', 'audio/mpeg']},
        }),
    ],
};

module.exports = BlogModel;