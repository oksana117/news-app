
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/usersNewsArticles")

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("Incorrect password.")
                }
            } else {
                res.json("User not found")
            }

        })
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(usersNewsArticles => res.json(usersNewsArticles))
        .catch(err => res.json(err))
})
/*
app.get("/search", (req, res) => {
    const { q } = req.query;

    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});*/



app.listen(3001, () => {
    console.log("server is running")
})