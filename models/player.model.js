const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playername: { type: String, required: true, unique: true, trim: true, }, 
    playernumber: { type: Number, required: true, unique: true },
    score: { type: Number, required: true },
    team: { type: String, required: true },
    // date: { type: Date, required: true }
    // game_id: Schema.Types.ObjectId
}, 
{ timestamps: true, });

const Player = mongoose.model("Player", playerSchema);



module.exports = Player;