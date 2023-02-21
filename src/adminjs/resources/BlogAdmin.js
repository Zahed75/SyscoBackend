const BLogModel = require('../../models/blogs/BlogModel');
const upload = require('@adminjs/upload');
const { UploadProvider } = require('../utils/uploadProvider');

const BlogModel = {
  resource: BLogModel,
  options: {
    listProperties: ['blogTitle','category','blogImg','blogDescription','user'],
    properties: {
      blogImg: {
        isVisible: false,
      },
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
      provider: new UploadProvider(),
      properties: {
        file: 'blog-image',
        key: 'blogImg',
      },
      uploadPath: (record, filename) => {
        return `${record.params.slug}.${filename.split('.').pop()}`;
      },
      validation: {
        mimeTypes: [],
      },
    }),
  ],
};

module.exports = BlogModel;
