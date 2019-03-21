//LOAD DATA
//Linking routes to data sources

var friendsArr = require("..data/friends.js");

module.exports = function(app){
    //API GET requests - below code handles when users visit a page

    app.get("/api/friends.js", function(req, res) {
        res.json(friendsArr);

    });

    app.post("/api/friends.js", function (req, res) {

        var userInput = req.body;

        var userResponses = userInput.scores;
        

    }
}