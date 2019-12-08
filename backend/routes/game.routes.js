const express = require('express');
const app = express();
const gameRoute = express.Router();

//Model
const Game = require('../model/game');
//Add
gameRoute.route('/add-game').post((req, res, next) => {
  Game.create(req.body, (error, data) => {
    if (error) {
      console.log("Could not add game");
      return next(error)
    } else {
      console.log("game added successfully");
      res.json(data)
    }
  })
});
//Update
gameRoute.route('/update-game/:id').put((req, res, next) => {
  Game.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log("Could not update game");
      return next(error);
    } else {
      console.log('game successfully updated!');
      res.json(data)
    }
  })
});

//Delete
gameRoute.route('/delete-game/:id').delete((req, res, next) => {
  Game.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Could not delete game');
      return next(error);
    } else {
      console.log('game successfully deleted!');
      res.status(200).json({
        msg: data
      })
    }
  })
});
//Get All
gameRoute.route('/get-games').get((req, res) => {
  Game.find((error, data) => {
    if (error) {
      console.log('Could not get all games');
      return next(error)
    } else {
      console.log('games successfully retrieved!');
      res.json(data)
    }
  })
});
//Get One
gameRoute.route('/get-game/:id').get((req, res) => {
  Game.findById(req.params.id, (error, data) => {
    if (error) {
      console.log('Could not get game');
      return next(error)
    } else {
      console.log('game successfully retrieved!');
      res.json(data)
    }
  })
});

module.exports = gameRoute;
