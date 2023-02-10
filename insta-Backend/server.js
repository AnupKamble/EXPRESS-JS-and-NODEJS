const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const connection = require("./config/db");
const { UserModel } = require("./models/user.models");
const { instaRouter } = require("./controllers/Routes");
const { authenticate } = require("./middlewares/Authentication");

const app = express();
app.use(express.json());


app.post("/signup", async (req, res) => {
    const { name, email, gender, password } = req.body;
       
    const userPresent = await UserModel.findOne({email});
     if (userPresent) {
        return res.send("try log in ,Email already exists")
     }
    try {
        bcrypt.hash(password, 4, async function (err, hash) {
            const data = new UserModel({ name, email, gender, password: hash });
            await data.save();
            res.send("sign up successfully");
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong! please try again");
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
      
    try {
        const user = await UserModel.find({ email }); // its find the particular user from DB;

        if (user.length > 0) {
            const hashed_password = user[0].password; // it gives particular user hashed Password;
            //   console.log(hashed_password);

            bcrypt.compare(password, hashed_password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ course: "ptWeb-8A" }, "hush");

                    res.send({ message: "LogIn in Successful", token: token });
                } else {
                    res.status(500).send("log in failed");
                }
            });
        } else {
            res.status(500).send("log in failed");
        }
    } catch (err) {
        // console.log(err.message);
        res.status(500).send("Log in failed");
    }
});


app.use(authenticate);
app.use('/instaposts', instaRouter)

const port = process.argv[2] || 5050;
app.listen(port, async () => {
    try {
        await connection();
        console.log(`server is running on port http://localhost:${port}`);
    } catch (err) {
        console.log("facing issue to run server");
    }
});
