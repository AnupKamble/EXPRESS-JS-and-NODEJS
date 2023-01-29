
const mongoose = require("mongoose")

const breedSchema = new mongoose.Schema(
    {
        breedname : {type:"String",required:"true"},
        age : {type:"Number",required:"true"},
        origin : {type:"String",required:"true"},
        price : {type:"Number",required:"true"},
    },
    {
        timestamps: true,
        versionKey : false
    }
)

const Breed = mongoose.model('breedschema',breedSchema)

module.exports = Breed;