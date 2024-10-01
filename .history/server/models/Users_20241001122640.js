const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const UserSchema = new mongoose.Schema({

    email: String,
    password: String
})

const UserModel = mongoose.model("usersNewsArticles", UserSchema) // table name

module.exports = UserModel;