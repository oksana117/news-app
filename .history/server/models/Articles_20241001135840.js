const mongoose = require('mongoose');

const ArticleModel = require('./Users');

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

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
