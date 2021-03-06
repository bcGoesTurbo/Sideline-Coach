require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const path = require('path');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

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
const playerRoutes = require ('./routes/player');

// app.use('/bball', bballRouter);
app.use('/player', playerRoutes);


app.listen(PORT, () => {
    console.log(` ==> API server now on port ${PORT}!`);
});
