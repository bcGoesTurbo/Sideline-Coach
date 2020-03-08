const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    player_name: { type: String }, 
    player_number: { type: Number },
    team_name: { type: String },
    teamID: { type: String }
}, 
{ collection: 'player' });

module.exports = mongoose.model("Player", playerSchema);



