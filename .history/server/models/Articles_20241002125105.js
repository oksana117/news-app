const mongoose = require('mongoose');

//const ArticleModel = require('./Users');

// Article Schema
const ArticleSchema = new mongoose.Schema({
    title: { type: String, default: null },
    image: { type: String, default: null },
    source: { type: String, default: null },
    pub_date: { type: String, default: null },
    description: { type: String, default: null },
    url: { type: String, default: null },
    isDeleted: { type: Boolean, default: false },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'usersNewsArticles', default: null }]
});

const ArticleModel = mongoose.models.ArticleModel || mongoose.model("ArticleModel", ArticleSchema);


module.exports = ArticleModel;
