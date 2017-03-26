// here are the functions we need to manage the images in our database

// first, we need to import the island schema from the model file
var Island = require('./model.js');

// this function finds all the islands
// and then sends them back to whatever sent the request
// which is our React App component
exports.index = function(req,res){
	Island.find()
	.then((islands) => res.send(islands));
};

// this function removes the image with the specific id
// we passed it (in our React App component)
// then sends a message of "okay" when it's done
// exports.destroy = function(req, res){
// 	Image.remove({ _id: req.params.id })
// 	.then(() => res.send("Okay"));
// };

// this function creates a new island instance
// adds the island object to it
// saves it
// and then sends it back to the requester (our React App component)
exports.create = function(req, res) {

	// set up a new variable for your island
	var island = new Island();

	// add all the bits to the new island object
	island.name = req.body.name;
	island.briefLocation = req.body.briefLocation;
	island.image = req.body.image;
	island.description = req.body.description;

	island.save()
	.then(island => res.send(island));
};