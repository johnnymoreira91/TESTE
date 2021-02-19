const express = require("express");
const apiUser = require('../src/routes/apiUsers');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Path = require('path');
require('dotenv').config()
const path = require('path');

const app = express();

app.use('/', apiUser);
//app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")));

const urlMongo = "mongodb+srv://johnny:12345@cluster0.vldqd.mongodb.net/api_users?retryWrites=true&w=majority"

mongoose.connect(urlMongo,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err)
            console.log(err)
        else
            console.log("Conectado ao mongo")
    }
);

module.exports = app;