
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./models/Users")
const ArticleModel = require("./models/Articles")
const request = require('request');


const app = express()
app.use(express.json())
app.use(cors())


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


//login user
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


// register user
app.post('/register', async (req, res) => {
    try {
        const existingUser = await UsersModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = await UsersModel.create(req.body);
        res.status(200).json({ message: 'Registered successfully', data: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





app.post('/logout', (req, res) => {

    res.json("Logged out successfully");
});

app.post('/search/addfav', async (req, res) => {
    const { userId, articleId, title, image, source, url, pub_date, description } = req.body;

    try {
        // Create a new favorite article with the provided details
        const newArticle = new ArticleModel({
            _id: articleId,
            title,
            image,
            source,
            url,
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





const apiKey1 = '7ef112f2e7bf3e22c6b23ab1bd567671';


app.get('/search', (req, res) => {

    const keywords = req.query.keywords;
    const url = `http://api.mediastack.com/v1/news?access_key=${apiKey1}& keywords=${keywords}& countries=us`;

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


app.get('/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const article = await ArticleModel.findById(id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.json(article);
    } catch (err) {
        res.status(500).send(err.message);
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


app.post('/search/savehistory', async (req, res) => {
    const { userId, query } = req.body;
    try {
        const user = await UsersModel.findById(userId);
        if (user) {
            user.searchHistory.push({ query });
            await user.save();
            res.status(200).json({ message: 'Search history saved successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error saving search history:', error);
        res.status(500).json({ message: 'Error saving search history', error: error.message });
    }
});


app.listen(3001, () => {
    console.log("server is running")
})