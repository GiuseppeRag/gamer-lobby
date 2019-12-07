const express = require('express');
const app = express();
const playerRoute = express.Router();
const mongoose = require('mongoose')

//Model
const Player = require('../model/Player');
//Add
playerRoute.route('/add-player').post((req, res, next) => {
  Player.create(req.body, (error, data) => {
    if (error) {
      console.log("Could not add player");
      return next(error)
    } else {
      console.log("Player added successfully");
      res.json(data)
    }
  })
});
//Update
playerRoute.route('/update-player/:id').put((req, res, next) => {
  Player.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log("Could not update player");
      return next(error);
    } else {
      console.log('Player successfully updated!');
      res.json(data)
    }
  })
});

//Delete
playerRoute.route('/delete-player/:id').delete((req, res, next) => {
  Player.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Could not delete player');
      return next(error);
    } else {
      console.log('Player successfully deleted!');
      res.status(200).json({
        msg: data
      })
    }
  })
});
//Get All
playerRoute.route('/get-player').get((req, res) => {
  Player.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
//Get One
playerRoute.route('/get-player/:id').get((req, res) => {
  Player.findById(mongoose.Types.ObjectId(req.params.id), (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = playerRoute;
