// this is our ADD ISLAND component

import React from 'react';

class AddIsland extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
      newIsland: { 
  	  	name: "",
        briefLocation: "",
        image: "",
        description: "",
        latitude: "",
        longitude: "",
      }
	  }

    this.updateInfo = this.updateInfo.bind(this);
    this.addIsland = this.addIsland.bind(this);
	}

  // store island data in state
  // until we push the new island up to our parent APP state
  updateInfo(evt) {

    // make a copy of the newIsland object in state
    var newIslandCopy = Object.assign(this.state.newIsland);

    // set the corresponding key of that object to our input's value
    newIslandCopy[evt.target.id] = evt.target.value;
    
    // replace the newIsland object in state with our altered copy
    this.setState({ newIsland: newIslandCopy});
  }

  // when the button is pushed
  // send our newIsland object up to the parent APP component
  addIsland() {
    var islandObject = this.state.newIsland;

    this.props.onAddIsland(islandObject);

    // Empty out all the inputs so that we can add another island

    // make a copy of the newIsland object in state
    var newIslandCopy = Object.assign(this.state.newIsland);

    // change the value of all properties to an empty string
    newIslandCopy.name = "";
    newIslandCopy.briefLocation = "";
    newIslandCopy.image = "";
    newIslandCopy.description = "";
    newIslandCopy.latitude = "";
    newIslandCopy.longitude = "";

    // set our copy as the new value of newIsland in state
    this.setState({ newIsland: newIslandCopy });
  }
  
	render() {

  	return (
  		<div className="add-island-container">
  			<h4>Add an island here</h4>
  			<input  placeholder="Add your island's name here"
                id="name"
                value={this.state.newIsland.name}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Where is your island?"
                id="briefLocation"
                value={this.state.newIsland.briefLocation}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add an image URL for your island here"
                id="image"
                value={this.state.newIsland.image}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <textarea   placeholder="Add a description of your island here"
                    id="description"
                    value={this.state.newIsland.description}
                    onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add the latitude of your island"
                id="latitude"
                value={this.state.newIsland.latitude}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add the longitude of your island"
                id="longitude"
                value={this.state.newIsland.longitude}
                onChange={(evt) => this.updateInfo(evt)}
        />

        <button onClick={ (evt) => this.addIsland(evt) }>Add your Island</button>

  		</div>
  	);
	}
}

export default AddIsland;
