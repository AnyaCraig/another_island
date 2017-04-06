// this is our Island Schema model
// we decide here what kind of information an Island can have

var mongoose = require("mongoose");

// here, we define what properties an island will have
var IslandSchema = new mongoose.Schema({
	name: String,
	briefLocation: String,
	image: String,
	description: String,
	latitude: Number,
	longitude: Number,
});

// and then export the schema with a name of "Island"
module.exports = mongoose.model('Island', IslandSchema);
