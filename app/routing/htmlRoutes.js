//Dependencies - include path package to get correct file for html
var path = require("path");

//ROUTING
module.exports = function(app){

//handles when users visit page

    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

    app.get("/survey", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    app.get("*", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

};