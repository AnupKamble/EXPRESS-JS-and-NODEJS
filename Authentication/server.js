
const express = require('express');

const app = express();
app.use(express.json());

 
app.get("/", (req,res)=> {
    
    return res.status(200).send("date posted successfully");
})




const port = process.argv[2] || 5050;
app.listen(port, ()=> {
    try {
        console.log(`server is running on port http://localhost:${port}`)
    }
    catch(err) {
        console.log('facing issue to run server');
    }
})