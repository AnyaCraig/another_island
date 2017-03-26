// this is our Island Schema model
// we decide here what kind of information an Island can have

var mongoose = require("mongoose");

var IslandSchema = new mongoose.Schema({
	name: String,
	briefLocation: String,
	image: String,
	description: String,
});

module.exports = mongoose.model('Island', IslandSchema);
