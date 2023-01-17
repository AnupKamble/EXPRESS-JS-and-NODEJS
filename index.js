
const express =require('express')

const app = express();

const fsPromises = require('fs/promises')
const fs = require('fs');

const port = process.argv[2] || 3035;

const cowsay = require('cowsay')

app.use(express.text());

 app.get( '/', (req,res)=> {

   try {return res.send ( 
        "<h1> WELCOME TO EMPLOYEE MANAGEMENT SYSTEM </h1>"
    )}
    catch(err) {
        return res.status(404).send('Unexpected Error')
    }
 })


 // for create employee.txt file
 app.post("/writeinfile/:fileName", (req,res)=> {
    try {
        const fileName = req.params.fileName;

        const text = req.body;
        console.log(text);

        const file =  fsPromises.writeFile( `./${fileName}` , text, {
            encoding : 'utf-8'
        })

        return res.send('Done!')
    }
    catch(err) {
        return res.status(404).send('Unexpected error')
    }
 })

  // for creating array of employees in one line
  app.use(express.json());
 app.get("/enternames" , (req,res)=> {

    try {
     
        let names = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];

        for ( i of names ) {
            fsPromises.appendFile("employee.txt", i +"\n",(error)=> {
                if (error) throw error;
            })
        }
        return res.send("<h1> All the names added in the file </h1>")
    }
    catch(err) {
        return res.status(404).send('Unexpected error in Reading File')
    }
 })

app.get("/alldetails" , (req,res)=> {
    try {
          
        const names = fs.readFileSync("./employee.txt", {
            encoding: "utf-8",
        }) 
        console.log(cowsay.say({
            text : names,
            e:"oO"
        }))
        return res.send("<h1> cowsay list of names </h1> ")
    }
    catch(err) {
        return res.status(404).send("Unexpected error found in CowSay")
    }
})

app.get("/delete", (req,res)=> {

    try {

        fsPromises.unlink("./employee.txt");

        return res.status(200).send("<h1> File has been deleted </h1>")
    }
    catch(err) {

        return res.status(404).send("Unexpected error in deleting the")
    }
})



// for checking the IP Adress of Website

app.get('/address',(req, res) => { 

   try {
     const IPAdd = req.socket.remoteAddress;

    return res.send(IPAdd);
  }
  catch {
    return res.status(404).send('unexpected Error')
  }
});

// for handling error 
app.get ('*', function (req, res) {
    res.sendFile(__dirname+'/pageNotFound.html');
})

app.listen(port, (err)=> {
    if(err) console.log("Not found 404")
    console.log(`server is running on http://localhost:${port}`)

})