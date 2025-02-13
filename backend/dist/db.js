const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongodbUri = process.env.MONGODB_URI;
const Connected =async()=>{
    try {
        await mongoose.connect(mongodbUri)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error.message);
        process.exit(1);
    }
}

module.exports = Connected;