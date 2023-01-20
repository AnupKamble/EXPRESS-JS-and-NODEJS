
const express= require('express');
const connection = require('./configs/db')
const characterControllers = require('./controllers/character.controllers')

const app = express();

app.use("/character" , characterControllers);
app.use(express.json());


const port = process.argv[2] || 3030;
app.listen(port,()=>{
      try {
           connection();
          console.log(`Server is running on http://localhost:${port}`)
      }
      catch (err) {
        console.log(err)
      }
})