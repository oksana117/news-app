const mongoose = require('mongoose');
const ArticleModel = require('./articleModel'); // Import the ArticleModel

// User Schema
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    likedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }]
});

const UserModel = mongoose.model("usersNewsArticles", UserSchema);

module.exports = { UserModel, ArticleModel };
