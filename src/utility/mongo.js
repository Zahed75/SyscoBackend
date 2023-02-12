const  mongoose =require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/sysco_hall';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const log = (msg) => console.log(msg);

exports.connectWithDb = async () => {
    try {
        await mongoose.connect(uri, options);
        log('Connected to  database');
    } catch (err) {
        log(err);
        process.exit(1);
    }
};

// exports.disconnectFromDB() {
//     return mongoose.connection.close();
