
const express = require('express');
const { postModel } = require('../models/postdata.models')

const instaRouter = express.Router();


instaRouter.get('/', async (req, res) => {

    try {
        const data = await postModel.find();
        return res.send(data);

    } catch (err) {

        return req.status(500).send({ "msg": "unexpected error" })
    }
})


instaRouter.post('/create', async (req, res) => {

    const payload = req.body;
    try {
        const new_data = new postModel(payload);
        await new_data.save();
        return res.send({ "msg": "Data added succesfully" });

    } catch (err) {

        return req.status(500).send({ "msg": "unexpected error" })
    }
})


instaRouter.patch('/update/:postId', async (req, res) => {
    

   
    // try { 
        const userID = req.body.userID;
        const postId = req.params.postId;
        const payload = req.body;
        // const story = await postModel.findOne({ _id:postId });

        // if ( userID !== story.userID) {

        //      res.send("not Authorised");
        // }
        // else {

            await postModel.findByIdAndUpdate({ _id: postId }, payload)

            res.send({ "msg": "post updated successfully" });
        // }
    // }
    // catch (err) {

    //     return req.status(500).send({ "msg": "unexpected error" })
    // }
})


instaRouter.delete('/delete/:deleteId', async (req, res) => {

    const deleteId = req.params.deleteId;
    try {

        await postModel.findByIdAndDelete({ _id: deleteId })

        return res.send("The post deleted succesfully")

    } catch (err) {

        return req.status(500).send({ "msg": "unexpected error" })
    }
})


module.exports = {
    instaRouter
}