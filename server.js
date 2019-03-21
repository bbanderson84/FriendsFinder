// required modules

var express = require('express');
var path = require('path');

var app = express();
var PORT = 8080;

// Sets up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTER - points to  server to a series of "route" files.
//Gives server a map of how to respond when users visit or request HTML
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//LISTENER - below code "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});