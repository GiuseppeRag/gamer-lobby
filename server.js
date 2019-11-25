var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var path = require('path');
var ObjectID = mongodb.ObjectID;

var PLAYER_COLLECTION = "players";

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/gamer-lobby'));

app.get('/**', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/gamer-lobby/index.html'));
})

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://admin:admin@cluster0-shard-00-00-tv3yk.mongodb.net:27017,cluster0-shard-00-01-tv3yk.mongodb.net:27017,cluster0-shard-00-02-tv3yk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 400, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }