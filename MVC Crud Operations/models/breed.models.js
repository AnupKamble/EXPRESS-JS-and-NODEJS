
const mongoose = require("mongoose")

const breedSchema = new mongoose.Schema(
    {
        breedname : {type:"String",required:"true"},
        age : {type:"Number",required:"true"},
        Origin : {type:"String",required:"true"},
        price : {type:"String",required:"true"},
    },
    {
        timestamps: true,
        versionKey : false
    }
)

const Breed = mongoose.model('breed',breedSchema)

module.exports = Breed;