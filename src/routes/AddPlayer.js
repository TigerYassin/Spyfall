var express = require('express');
const bodyParser = require('body-parser')
// import firebase from "firebase";

var app = express();
app.use(bodyParser.json());
const PORT = 5000;

// app.use(bodyParser.json());
//
// /*
//       1. Save player to database
// */
// var config = {
//   apiKey: "AIzaSyCjTyXLrai7YlDQoO6qKJPkrPzLqwNFsjY",
//   authDomain: "skyfall-16f32.firebaseapp.com",
//   databaseURL: "https://skyfall-16f32.firebaseio.com",
//   projectId: "skyfall-16f32",
//   storageBucket: "skyfall-16f32.appspot.com",
//   messagingSenderId: "120922465934"
// };
// firebase.initializeApp(config);
//
// var database = firebase.database();

var players = [
  {id : 1, username: "Yassin"},
  {id: 2, username: "ABDI"},
  {id : 3, username: "Basu"}
]

app.get("/display/players", (req, res, next) => {
      res.json(players);
})


app.post("/display/players", (req, res)=> {
  console.log(req.body);
  players[players.length] = req.body;
  res.send(players);
})





app.listen(PORT, ()=> { console.log(`Listening on Port number ${PORT}`)})
