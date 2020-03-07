const express = require("express");
const playerRoutes = express.Router();

// Require Player model in our routes module
let Player = require("../models/player.model");

playerRoutes.route("/add").post((req, res) => {
  let player = new Player(req.body);
  player.save()
    .then(player => {
      res.status(200).json({ player: "player added successfully" });
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Defined get data route
playerRoutes.route("/").get(function(req, res) {
  Player.find(function(err, player) {
    if (err) {
      console.log(err);
    } else {
      res.json(player);
    }
  });
});

// Defined edit route
playerRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Player.findById(id, function (err, player){
        res.json(player);
    });
  });

  //  Defined update route
playerRoutes.route('/update/:id').post(function (req, res) {
    Player.findById(req.params.id, function(err, player) {
    if (!player)
      res.status(404).send("data is not found");
    else {
        player.playername = req.body.playername;
        player.playernumber = req.body.playernumber;
        player.team = req.body.team;

        player.save().then(player => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
playerRoutes.route('/delete/:id').get(function (req, res) {
  Player.findByIdAndRemove({_id: req.params.id}, function(err, player){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = playerRoutes;
