const express = require('express');
const app = express();
const userRoute = express.Router();

//Model
const User = require('../model/user');
//Add
userRoute.route('/add-user').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      console.log("Could not add User");
      return next(error)
    } else {
      console.log("User added successfully");
      res.json(data)
    }
  })
});
//Update
userRoute.route('/update-user/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log("Could not update User");
      return next(error);
    } else {
      console.log('User successfully updated!');
      res.json(data)
    }
  })
});

//Delete
userRoute.route('/delete-user/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Could not delete User');
      return next(error);
    } else {
      console.log('User successfully deleted!');
      res.status(200).json({
        msg: data
      })
    }
  })
});
//Get All
userRoute.route('/get-users').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      console.log('Could not get all Users');
      return next(error)
    } else {
      console.log('Users successfully retrieved!');
      res.json(data)
    }
  })
});
//Get One
userRoute.route('/get-user/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      console.log('Could not get User');
      return next(error)
    } else {
      console.log('User successfully retrieved!');
      res.json(data)
    }
  })
});

module.exports = userRoute;
