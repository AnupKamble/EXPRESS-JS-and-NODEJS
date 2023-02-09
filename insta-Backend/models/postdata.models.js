const mongoose = require('mongoose')

const postDataSchema = new mongoose.Schema (
    {
       title: String,
       body: String,
       device :String
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const postModel = mongoose.model("postData",postDataSchema);

module.exports = {
    postModel
};