// here are the functions we need to manage the images in our database

// first, we need to import the island schema from the model file
var Island = require('./model.js');

// this function finds all the islands
// and then sends them back to whatever sent the request
// which is our React App component
exports.index = function(req,res){

	// find all islands whose name OR brieflocation OR description match the search query
	// also, because of the regex, they don't have to totally match
	// also it's case-insensitive
	Island.find({ 	$or: [
						{ name: { $regex: req.query.q, $options: 'i' }}, 
						{ briefLocation: {$regex: req.query.q, $options: 'i'}},
						{ description: {$regex: req.query.q, $options: 'i'}},
					]
				})
	.then((islands) => res.send(islands));
};

// this function removes the image with the specific id
// we passed it (in our React App component)
// then sends a message of "okay" when it's done
exports.destroy = function(req, res){
	Island.remove({ _id: req.params.id })
	.then(() => res.send("Okay"));
};

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
	island.latitude = req.body.latitude;
	island.longitude = req.body.longitude;

	island.save()
	.then(island => res.send(island));
};

// this function edits an existing island instance
// and replaces the existing island properties with
// the corresponding properties of an island object that we passed up
exports.update = function(req, res) {
  Island.findById(req.params.id)
  .then((island) => {

    island.name = req.body.name;
    island.briefLocation = req.body.briefLocation;
    island.image = req.body.image;
    island.description = req.body.description;
    island.latitude = req.body.latitude;
    island.longitude = req.body.longitude;
	
	// then, it saves the island object
	// and sends the revised island back to the requester (our app)
    island.save()
    .then(function(island) {
      res.send(island);
    })
    .catch(function(err) {
      res.status(422);
      res.send(err);
    });
  })
  .catch(() => res.send(404))
};
