
const express = require('express');
const Breed = require('../models/breed.models')
const {Router}=require('express');


const router = Router();

 
router.get("/", (req,res)=> {

    try {
        return res.status(200).send("I love Pitbull")
    }
    catch(err) {

        return res.status(500).send(err.message)
    }
})

 
router.post("/", async (req,res)=> {

    try {
          const data = await Breed.create(req.body)
        return res.status(200).send(data)
    }
    catch(err) {

        return res.status(500).send(err.message)
    }
})


module.exports = router;