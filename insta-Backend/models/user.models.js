
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema (

    {
        name : String,
        email: String,
        gender : String,
        password : String
    },
    {
        timestamps: true,
        versionKey : false
    }
)

const UserModel = mongoose.model('users',userSchema);

module.exports = {
        UserModel
    } 