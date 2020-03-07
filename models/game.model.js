const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    game_id: { type: Number, required: true, unique: true },
    home_score: { type: Number, required: true },
    away_score: { type: Number, required: true },
    home_team_name: { type: String, required: true },     
    away_team_name: { type: String, required: true }     
}, {
    timestamps: true,
});

const Game = mongoose.model("BasketBall", gameSchema);

module.exports = Game;