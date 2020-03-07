const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playername: { type: String, required: true, unique: true, trim: true, }, 
    playernumber: { type: Number, required: true, unique: true },
    // score: { type: Number, required: true },
    team: { type: String },
    // date: { type: Date, required: true }
    // game_id: Schema.Types.ObjectId
}, 
{ collection: 'player' });

module.exports = mongoose.model("Player", playerSchema);



