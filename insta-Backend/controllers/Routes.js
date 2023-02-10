
const express = require('express');
const {postModel} = require('../models/postdata.models')

const instaRouter = express.Router();


instaRouter.get('/' , async (req,res)=> {

    try {
        const data = await postModel.find();
        res.send(data);

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


instaRouter.post('/create' , async (req,res)=> {
      
    const payload = req.body;
    try {
        const new_data = new postModel(payload);
            await new_data.save();
    return res.send({"msg" : "Data added succesfully"});

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


instaRouter.patch('/update/id' , async (req,res)=> {

    try {
        
        res.send("WIP")

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


instaRouter.delete('/delete/id' , async (req,res)=> {

    try {
        
        res.send("WIP")

    }catch(err) {

        req.status(500).send({"msg":"unexpected error"})
    }
})


module.exports = {
    instaRouter
}