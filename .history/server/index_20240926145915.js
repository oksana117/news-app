
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = epxress()
app.use(express.json())
app.use(cors())

//mongoose.connect("")


app.listen(30001, () => {
    console.log("server is running")
})