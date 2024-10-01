const mongoose = require('mongoose');

const ArticleModel = require('/');

// Article Schema
const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    source: String,
    pub_date: String,
    description: String,
    isDeleted: { type: Boolean, default: false },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'usersNewsArticles' }]
});

const ArticleModel = mongoose.model("articlesModel", ArticleSchema); //table name

module.exports = ArticleModel;
