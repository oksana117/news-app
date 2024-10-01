
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")
const ArticleModel = require("./models/Articles")
const request = require('request');


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/usersNewsArticles")
/*
app.post('/login', (req, res) => {
    const { email, password} = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                   


                }
                else {
                    res.json("Incorrect password.")
                }
            } else {
                res.json("User not found")
            }

        })
})*/


app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(usersNewsArticles => res.json(usersNewsArticles))
        .catch(err => res.json(err))
})

app.post('/logout', (req, res) => {

    res.json("Logged out successfully");
});

app.post('/add-to-favorites', (req, res) => {
    const { userId, articleId } = req.body;

    ArticleModel.findById(articleId)
        .then(article => {
            if (!article) {
                return res.status(404).json({ message: "Article not found" });
            }

            if (!article.likedBy.includes(userId)) {
                article.likedBy.push(userId);
                return article.save();
            } else {
                return Promise.resolve(article);
            }
        })
        .then(article => res.json({ message: "Article added to favorites", article }))
        .catch(err => res.status(500).json({ message: "Server error", error: err }));
});



const apiKey1 = '7ef112f2e7bf3e22c6b23ab1bd567671'; //remove i
const apiKey = 'h0OkQRWiT_Y-oyygjyFAvF9w9CpgeTDLzAvh1mUqleaLpc2p';



app.get('/search', (req, res) => {

    const keywords = req.query.keywords;
    const url = `http://api.mediastack.com/v1/news?access_key=${apiKey1}& keywords=${keywords}& countries=us`;
    //
    //const url = `http://api.mediastack.com/v1/news?access_key=${apiKey1}&languages=en`
    //const url = `https://api.currentsapi.services/v1/search?domain=zdnet.com&keywords=${keywords}&language=en` + `country=us&` + `apiKey=${apiKey}`;
    //const url = 'https://api.currentsapi.services/v1/latest-news?' +'language=us&' +'apiKey=h0OkQRWiT_Y-oyygjyFAvF9w9CpgeTDLzAvh1mUqleaLpc2p';


    request(url, function (error, response, body) {
        if (error) {
            console.log('Error:', error);
            res.status(500).send('Error fetching data');
        } else {
            try {
                const parsedBody = JSON.parse(body);
                res.json(parsedBody);
            } catch (e) {
                console.error('Error parsing JSON:', e);
                res.status(500).send('Error parsing data');
            }
        }
    });
});


app.listen(3001, () => {
    console.log("server is running")
})