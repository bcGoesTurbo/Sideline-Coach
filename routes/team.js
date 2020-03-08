const router = require("express");
const BBall = require("../models/bball.model");

router.route("/").get((req, res) => {
  BBall.find()
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newBBall = new BBall({
    username,
    description,
    duration,
    date
  });

  newBBall
    .save()
    .then(() => res.json("Basketball added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  BBall.findById(req.params.id)
    .then(bball => res.json(bball))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  BBall.findByIdAndDelete(req.params.id)
    .then(bball => res.json(bball))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  BBall.findById(req.params.id)
  .then(bball => {
    bball.username = req.body.username;
    bball.description = req.body.description;
    bball.duration = Number(req.body.duration);
    bball.date = Date.parse(req.body.date);
    
    bball.save()
      .then(() => res.json("basketball updated!"))
      .catch(err => res.status(400).json("Error: " + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
