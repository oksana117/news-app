
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")
const request = require('request');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/usersNewsArticles")

app.post('/login', (req, res) => {
    const { email, password } = req.body;
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
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(usersNewsArticles => res.json(usersNewsArticles))
        .catch(err => res.json(err))
})

/*
app.get('/search', (req, res) => {
    const { q } = req.query;

    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});*/

const apiKey1 = 'e1eaf2e94f2a5e252da9ef182c1b178b'; //remove i
const apiKey = 'gQe1OIS07_7klluzmcY3AFSpZefr87YrCVhuFja2nFLx5zyC';

app.get('/search', (req, res) => {
    //const { q } = req.query;
    //const keys = ["title", "url", "published_at", "description"];
    const keywords = req.query.keywords;
    //const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${keywords}&countries=us`;
    const url = `https://api.currentsapi.services/v1/search?domain=zdnet.com&keywords=${keywords}&language=en` +
        `country=us&` + 'apiKey=gQe1OIS07_7klluzmcY3AFSpZefr87YrCVhuFja2nFLx5zyC';

    const url = 'https://api.currentsapi.services/v1/search?domain=zdnet.com&keywords=${keywords}&language=en' + 'country=us&' + 'apiKey=gQe1OIS07_7klluzmcY3AFSpZefr87YrCVhuFja2nFLx5zyC';

    const url3 = 'https://api.currentsapi.services/v1/search?domain=zdnet.com&keywords=Amazon&language=en' +
    'country=us&' +'apiKey=gQe1OIS07_7klluzmcY3AFSpZefr87YrCVhuFja2nFLx5zyC';

    /*const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };*/

    request(url, function (error, response, body) {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Body:', body);
            res.json(body);
        }
    });
});

app.listen(3001, () => {
    console.log("server is running")
})