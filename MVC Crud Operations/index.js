const express = require('express');
const connection = require("./config/db")
const router = require('./controllers/breed.controllers')

const app = express();

app.use(express.json());

app.use("/Dogbreed",router)

const port = process.argv[2] || 3035;
app.listen( port, ()=> {
    try {
        connection();
       console.log(`server is running on port http://localhost:${port}`)
    }
    
    catch(err) {
        console.log("unexpected error")
    }
})