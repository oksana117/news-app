const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const UserSchema = new mongoose.Schema({

    email: String,
    password: String,
    searchHistory: [{
        query: String,
        date: { type: Date, default: Date.now }
    }]
})

const UserModel = mongoose.model("usersNewsArticles", UserSchema) // table name

module.exports = UserModel;