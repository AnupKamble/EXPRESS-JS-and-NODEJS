
const express = require('express');
const {postModel} = require('../models/postdata.models')

const instaRouter = express.Router();


instaRouter.get('/' , async (req,res)=> {

    try {
        
        res.send("WIP")

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


instaRouter.get('/' , async (req,res)=> {

    try {
        
        res.send("WIP")

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


module.exports = {
    instaRouter
}