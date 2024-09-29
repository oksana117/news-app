const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
let User = mongoose.Schema(
    {