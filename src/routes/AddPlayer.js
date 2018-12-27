var express = require('express');
const bodyParser = require('body-parser')
var firebase = require("firebase/app");

//Firebase Database SetUp
require("firebase/database");
var config = {
  apiKey: "AIzaSyCjTyXLrai7YlDQoO6qKJPkrPzLqwNFsjY",
  authDomain: "skyfall-16f32.firebaseapp.com",
  databaseURL: "https://skyfall-16f32.firebaseio.com",
  projectId: "skyfall-16f32",
  storageBucket: "skyfall-16f32.appspot.com",
  messagingSenderId: "120922465934"
};
firebase.initializeApp(config);
var database = firebase.database();



//Express SetUp
var app = express();
app.use(bodyParser.json());
const PORT = 5000;



var players = {}

/*
  players = {           Names         #Spies      Locations
      "D34ssa" : [ ["Yassin", "ABDI"], [3], ["AirPlane", "House"] ]
}
*/
var spies = {"Number of Spies" : 1};


app.get("/display/players", (req, res, next) => {
      res.send(players);
})

/*
  Takes: array
  Pulls dictionary from database and adds the list to it and pushes it back
*/
function UpdateDataBase(playersArray){

}

app.post("/display/players", (req, res)=> {
  var temp = req.body;
  var tempArray = [];
  var prevData = [];
  var tempKey = Object.keys(temp)[0]
  console.log(temp);

  if (tempKey in players) {
    console.log(tempKey)
    tempArray = players[tempKey];
    tempArray[tempArray.length] = temp[tempKey];
    players[tempKey] = tempArray;
  }
  else{
    tempArray[0] = temp[tempKey]
    players[tempKey] = tempArray;
  }

  firebase.database().ref(tempKey).once('value').then(function(snapshot) {
    prevData = snapshot.val();
    prevData[2] = players[tempKey];
    console.log("this is the whole prevData", prevData)
    firebase.database().ref(tempKey).set(prevData);

    // console.log(prevData[2]);
  });
  res.send(players);
})


app.post('/NumOfSpies', (req, res, next) => {
  // {"d5aa3" : {"NumOfSpies" : 3} }

  var request = req.body;
  var tempKey = Object.keys(request)[0]
  spies = request[tempKey];
  /*
  TODO: NOT WORKING BECAUSE IT IS OVERWRITING IN THE DATABASE
  STORE THE DATA INTO A VARIABLE FIRST THEN UPDATE THE VARIABLE AND SAVE IT BACK TO DATABASE
  https://firebase.google.com/docs/database/web/read-and-write
  */

  var locations = []
  locations = ["Airplane", "Bus", "School"]
  var allData = [spies, locations]
  firebase.database().ref(tempKey).set(allData)
  res.send(request)
})

app.get('/numOfSpies', (req, res, next) => {
  res.send(spies);
  //create locations and push with number of spies
})





app.listen(PORT, ()=> { console.log(`Listening on Port number ${PORT}`)})
