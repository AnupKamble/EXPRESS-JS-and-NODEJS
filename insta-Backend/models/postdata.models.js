const mongoose = require('mongoose')

const postDataSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        device: String,
        userID : String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const postModel = mongoose.model("postdatas", postDataSchema);

module.exports = {
    postModel
};