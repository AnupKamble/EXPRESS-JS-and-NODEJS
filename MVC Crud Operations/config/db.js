const mongoose = require('mongoose');

const connection = async ()=> {

    await mongoose.connect("mongodb://localhost:27017/breed")
}

module.exports = connection;