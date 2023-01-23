
const express = require('express');

const router = express.Router();

 
router.get("/", (req,res)=> {

    try {
        return res.status(200).send("I love Pitbull")
    }
    catch(err) {

        return res.status(500).send(err.message)
    }
})

module.exports = router;