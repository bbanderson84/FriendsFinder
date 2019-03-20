// required modules

var express = require('express');
var path = require('path');

var app = express();
var PORT = 8080;

// Sets up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
