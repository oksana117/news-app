
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



const apiKey1 = 'e1eaf2e94f2a5e252da9ef182c1b178b'; //remove i
const apiKey = 'h0OkQRWiT_Y-oyygjyFAvF9w9CpgeTDLzAvh1mUqleaLpc2p';

/*
app.get('/search', (req, res) => {
  
    const keywords = req.query.keywords;
    const url = `http://api.mediastack.com/v1/news?access_key=${apiKey1}& keywords=${keywords}& countries=us`;

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
});*/

app.get('/search', (req, res) => {
    const { keywords, category, source } = req.query;
    let url = `http://api.mediastack.com/v1/news?access_key=${apiKey1}`;

    if (keywords) {
        url += `&keywords=${keywords}`;
    }
    if (category) {
        url += `&categories=${category}`;
    }
    if (source) {
        url += `&sources=${source}`;
    }

    request(url, function (error, response, body) {
        if (error) {
            console.log('Error:', error);
            res.status(500).send('Error fetching data');
        } else {
            try {
                const parsedBody = JSON.parse(body); // Parse the response body
                res.json(parsedBody); // Send the parsed JSON object
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