const mongoose = require('mongoose');

// Article Schema
const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    url: String,
    isDeleted: { type: Boolean, default: false },
    likedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }]
});

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
