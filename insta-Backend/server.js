
const express = require('express');
const connection = require('./config/db')
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json());

 
app.get("/", (req,res)=> {
    
    return res.status(200).send("date posted successfully");
})


app.post("/signup",(req,res)=> {

    const {name,email,gender,password} = req.body;
    try {
         
        bcrypt.hash()
    }
    catch(err) {

    }
})

const port = process.argv[2] || 5050;
app.listen(port, ()=> {
    try {
        connection();
        console.log(`server is running on port http://localhost:${port}`)
    }
    catch(err) {
        console.log('facing issue to run server');
    }
})