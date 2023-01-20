const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema (
   {
     name:{type:"String", required:true},
     age : {type:"Number", required:true},
     type : {type:"String" , required:true},
     ratings: {type:"Number" ,required:true},
     hundreds: {type:"Number" , required:true},
     highscore:{typr:"number",required:true}
   },
   {
    timestamps : true,
    versionKey : false
   }
)


const cricketers = mongoose.model("character",characterSchema)

module.exports = cricketers;
