require('dotenv').config();

var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');

// connecting to our database
mongoose.connect(process.env.MONGODB_SERVER);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

// when something requests this url, serve them the islands folder
// this will default to api/islands/index.js file since the file name
// is not specified
app.use('/api/islands', require('./api/islands'));

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

// here, we set a port for our app to run on
app.listen(process.env.PORT || 8080);
