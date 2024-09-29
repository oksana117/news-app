const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users")