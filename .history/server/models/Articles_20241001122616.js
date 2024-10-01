const mongoose = require('mongoose');

// Article Schema
const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    url: String
});

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
