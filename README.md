# Friend Finder Application

## Friend finder is an application that allows the user to take a short 10 question survey, and matches them with a friend who had the most similar results and answers of the survey. The questions are personality based, and once the user inputs their information, they are added to the network of friends and can come up as a possible match for another user. 

## This application is meant to simulate a simple dating or social networking application.

### Node.js and express server are on the back end, while Bootstrap, Materialize CSS, Javascript, and JQuery are running on the front end.

## DEMO
### Friend Finder is deployed on Heroku. You can find it here: <https://friend-finder-brandons-version.herokuapp.com/> 

## FUNCTIONALITY

### server.js 
#### setting up the server, express app, router, and listener. Also sets the required modules for app.
![Alt text](/screenshots/Server.png?raw=true "Server File")

### apiRoutes.js
#### importing JSON list of friend entries, exports API routes, routing that handles get requests from friends api route, routing that handles post requests from friends api route, logic for adding new users to friends list.
![Alt text](/screenshots/ApiRoutes.png?raw=true "API Routes File")

### apiRoutes.js (cont)
#### handles logic for calculating and comparing scores of stored friends to user (new friend) and matches bases on those scores, pushes new user into friends array
![Alt text](/screenshots/ApiRoutes2.png?raw=true "API Routes File")

### htmlRoutes.js (cont)
#### handles the corresponding page for the route that the user hits
![Alt text](/screenshots/HtmlRoutes.png?raw=true "HTML Routes File")

### Submit Logic
#### handles the logic for targeting value of input fields the user fills out, triggers the modal which shows matched friend information
![Alt text](/screenshots/SubmitLogic.png?raw=true "Submit Logic File")


