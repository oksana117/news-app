
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = epxexpressess()
app.use(express.json())
app.use(cors())

//mongoose.connect("")


app.listen(30001, () => {
    console.log("server is running")
})