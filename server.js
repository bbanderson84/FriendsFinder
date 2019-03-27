// required modules

var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, './app/public')));

//ROUTER - points to  server to a series of "route" files.
//Gives server a map of how to respond when users visit or request HTML

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//LISTENER - below code "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});