const express = require('express');

const router = express.Router();

router.get("/" , (req,res)=> {

    try {
       res.status(200).send("I love cricket")
    }
    catch(err) {

        res.status(500).send("err.message")
    }
})

module.exports = router;