const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const connection = async ()=> {

    await mongoose.connect("mongodb://localhost:27017/instaPost");
}

module.exports = connection;
