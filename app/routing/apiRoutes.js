//LOAD DATA
//Linking routes to data sources

var friendsArr = require("../data/friends.js");

module.exports = function(app){
    //API GET requests - below code handles when users visit a page

    app.get("/api/friends", function(req, res) {

        res.json(friendsArr);

    });

    app.post("/api/friends", function (req, res) {

        var userInput = req.body;

        var userAnswers = userInput.scores;

        var matchName = "";

        var matchImage = '';

        var setDifference = 2000;

        for (var i = 0; i < friendsArr.length; i++) {

            var difference = 0;

            for (var a = 0; a < userAnswers.length; a++) {
                difference += Math.abs(friendsArr[i].scores[a] - userAnswers[a]);

            }

            if (difference < setDifference ) {
                
                setDifference = difference;

                matchName = friendsArr[i].name;

                matchImage = friendsArr[i].photo;
            }

        }

        friendsArr.push(userInput);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});



    });
};