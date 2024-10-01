
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")
const ArticleModel = require("./models/Articles")
const request = require('request');


const app = express()
app.use(express.json())
app.use(cors())

//mongoose.connect("mongodb://localhost:27017/usersNewsArticles")

mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'usersNewsArticles',
    })
    .then(() => {
        console.log('Connected to the Database.');
    })
    .catch(err => console.error(err));



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Success", userId: user._id });
                } else {
                    res.json({ message: "Incorrect password." });
                }
            } else {
                res.json({ message: "User not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Server error", error: err });
        });
});


app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(usersNewsArticles => res.json(usersNewsArticles))
        .catch(err => res.json(err))
})

app.post('/logout', (req, res) => {

    res.json("Logged out successfully");
});

app.post('/search/addfav', async (req, res) => {
    const { userId, articleId, title, image, source, pub_date, description } = req.body;

    try {
        // Create a new article with the provided details
        const newArticle = new ArticleModel({
            _id: articleId,
            title,
            image,
            source,
            pub_date,
            description,
            likedBy: [userId]
        });

        // Save the new article
        await newArticle.save();

        res.status(200).json({ message: 'Article saved and liked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
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


app.get('/favorites/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Find articles liked by the user
        const favoriteArticles = await ArticleModel.find({ likedBy: userId, isDeleted: false });

        res.status(200).json(favoriteArticles);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/favorites/remove', async (req, res) => {
    const { userId, articleId } = req.body;

    try {
        // Find the article by ID and update isDeleted to true
        await ArticleModel.findByIdAndUpdate(articleId, { isDeleted: true });

        res.status(200).json({ message: 'Article removed from favorites' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(3001, () => {
    console.log("server is running")
})