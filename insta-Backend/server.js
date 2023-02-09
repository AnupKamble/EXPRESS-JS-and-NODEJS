
const express = require('express');
const bcrypt = require('bcrypt')

const connection = require('./config/db')
const UserModel = require("./models/user.models")

const app = express();
app.use(express.json());

 
app.get("/", (req,res)=> {
    
    return res.status(200).send("data posted successfully");
})


app.post("/signup", async(req,res)=> {

    const {name,email,gender,password} = req.body;
    try {
         
        bcrypt.hash(password, 4, async function(err,hash) {

            const data = new UserModel({name,email,gender,password:hash})
             await data.save()
              res.send("sign up successfully")
        })
    }
    catch(err) {
        console.log(err);
         res.status(500).send("Something went wrong! please try again")
    }
})

app.post("/login",async (req,res)=> {

})

const port = process.argv[2] || 5050;
app.listen(port, async()=> {
    try {
        await connection();
        console.log(`server is running on port http://localhost:${port}`)
    }
    catch(err) {
        console.log('facing issue to run server'); 
    }
})