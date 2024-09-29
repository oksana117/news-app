
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/usersNewsArticles")

app.post('/login', (res, req) => {
    const { email, password } = req.body;
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(30001, () => {
    console.log("server is running")
})