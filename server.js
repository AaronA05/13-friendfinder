
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var myFriends = [
	{
		name: "Jordan Johns",
		picture: "url.com",
		scores: [
			1,
			4,
			3,
			2,
			1,
			2,
			4,
			5,
			1,
			3
		]
	},
	{
		name: "Aaron Arndt",
		picture: "aaron.url.com",
		scores: [
			2,
			3,
			5,
			5,
			5,
			3,
			1,
			2,
			4,
			3
		]
	}
]

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname + "/pages/survey.html"));
});

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/pages/home.html"));
});

app.get("/api/friends", function(req, res){
	res.json(myFriends);
});

app.post("/api/add", function(req, res){
	var newFriend = req.body;

	myFriends.push(newFriend);
	res.json(newFriend);
	
//app.post creates the logic for matching friends
	//need to create an object to hold new friend data- name, photo, scores


})

	

app.listen(PORT, function(){
	console.log("App listening on: " + PORT);
});