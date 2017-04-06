// this is our EDIT ISLAND component

import React from 'react';

class EditIsland extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
      updatedIsland: { 
  	  	name: "",
        briefLocation: "",
        image: "",
        description: "",
        latitude: "",
        longitude: "",
      },
      islandId:"",
	}

    this.updateIsland = this.updateIsland.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
	}

	componentDidMount() {

		// we get the specific island by looking for an island in our array
		// that matches the requested id
		var island = this.props.islands.find(island => island._id == this.props.params.id);

		// we set the initial island properties in an object...
		var islandObject = {
			name: island.name, 
			briefLocation: island.briefLocation, 
			image: island.image, 
			description: island.description, 
			latitude: island.latitude, 
			longitude: island.longitude
		};

		// which we then push up to state
		this.setState({
			updatedIsland: islandObject,
			islandId: this.props.params.id,
		})
	}

	// we make a copy of our island object from state,
	// update the specific property
	// and replace the island object in state with the updated one
	updateIsland(evt) {
	  var updatedIsland = Object.assign(this.state.updatedIsland);
	  updatedIsland[evt.target.id] = evt.target.value;
	  this.setState({updatedIsland: updatedIsland});
	}

	// we send the updated island up to the parent
	// and empty out our local state
	saveChanges() {
		this.props.onEditIsland(this.state.islandId, this.state.updatedIsland)

		var emptyIsland = Object.assign(this.state.updatedIsland);

		emptyIsland.name = "";
		emptyIsland.briefLocation = "";
		emptyIsland.image = "";
		emptyIsland.description = "";
		emptyIsland.latitude = "";
		emptyIsland.longitude = "";

		this.setState({
			updatedIsland: emptyIsland,
			islandId: "",
		})
	}
  
  	render() {
  		
        return (
        	<div className="edit-island-container">

	        	<input id="name" value={this.state.updatedIsland.name} onChange={ (evt) => this.updateIsland(evt)}/>
	        	<input id="briefLocation" value={this.state.updatedIsland.briefLocation} onChange={ (evt) => this.updateIsland(evt)}/>
	        	<input id="image" value={this.state.updatedIsland.image} onChange={ (evt) => this.updateIsland(evt)}/>
	        	<textarea id="description" value={this.state.updatedIsland.description} onChange={ (evt) => this.updateIsland(evt)}/>
	        	<input id="latitude" value={this.state.updatedIsland.latitude} onChange={ (evt) => this.updateIsland(evt)}/>
	        	<input id="longitude" value={this.state.updatedIsland.longitude} onChange={ (evt) => this.updateIsland(evt)}/>

	        	<button onClick={() => this.saveChanges()}>Save changes</button>
	      
	    	</div>
    	);
  	}
}

export default EditIsland;
