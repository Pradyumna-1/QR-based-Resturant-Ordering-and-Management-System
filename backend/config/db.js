const mongooose = require('mongoose')

const connectDB = async (req, res) => {
    try {
        await mongooose.connect(process.env.MONGO_URI, {
            autoIndex: true
        })
        console.log('MongoDB Connected');

    }
    catch (error) {
        console.log('connection failed', error.message);
        process.exit(1);

    }
}
module.exports = connectDB