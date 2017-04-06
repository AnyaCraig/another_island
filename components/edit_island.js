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

		var island = this.props.islands.find(island => island._id == this.props.params.id);

		var islandObject = {
			name: island.name, 
			briefLocation: island.briefLocation, 
			image: island.image, 
			description: island.description, 
			latitude: island.latitude, 
			longitude: island.longitude
		};

		this.setState({
			updatedIsland: islandObject,
			islandId: this.props.params.id,
		})
		

	}

	updateIsland(evt) {
	  var updatedIsland = Object.assign(this.state.updatedIsland);
	  updatedIsland[evt.target.id] = evt.target.value;
	  this.setState({updatedIsland: updatedIsland});
	}

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