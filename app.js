var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.statusCode = 418;
    res.send();
});

app.use(function (err, req, res, next) {
    res.statusCode = 418;
    res.send();
});

module.exports = app;
