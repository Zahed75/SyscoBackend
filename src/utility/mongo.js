const  mongoose =require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/sysco_hall';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const log = (msg) => console.log(msg);

exports.connectWithDb = async () => {
    try {
        await mongoose.connect(URI, options);
        log('Connection Success');
    } catch (err) {
        log(err);
        process.exit(1);
    }
};

