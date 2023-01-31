const mongoose = require('mongoose')

const postDataSchema = new mongoose.Schema (
    {
       "title" : {type:"String",required:true},
       "body" : {type:"String",required:true},
       "device" : {type:"String",required:true}
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const postModel = mongoose.model("postData",postDataSchema);

module.exports = postModel;