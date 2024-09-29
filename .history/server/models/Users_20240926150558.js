const mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// User Schema
let User = mongoose.Schema(
    {