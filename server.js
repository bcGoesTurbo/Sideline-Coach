require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SidelineCoach",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

// const bballRouter = require ('./routes/bball');
const playerRoutes = require ('./routes/players');

// app.use('/bball', bballRouter);
app.use('/players', playerRoutes);

// var Schema = mongoose.Schema;

// var playerSchema = new Schema ({
//     playerName: String,
//     playerNumber: Number
// });

// var PlayerList = mongoose.model("PlayerList", playerSchema);

// var PlayerListOne = new PlayerList ({
//     playerName: "Andrew",
//     playerNumber: 4
// });

// PlayerListOne.save(function(error) {
//     console.log("Your player has been saved!");
//     if(error) {
//         console.error(error);
//     }
// });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
