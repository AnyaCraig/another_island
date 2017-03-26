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
  }
  
	render() {

  	return (
  		<div className="add-island-container">
  			<h4>Add an island here</h4>
  			<input  placeholder="Add your island's name here"
                id="name"
                value={this.state.newIsland.islandName}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add a brief location for your island here"
                id="briefLocation"
                value={this.state.newIsland.briefLocation}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add an image URL for your island here"
                id="image"
                value={this.state.newIsland.image}
                onChange={(evt) => this.updateInfo(evt)}
        />
        <input  placeholder="Add a description of your island here"
                id="description"
                value={this.state.newIsland.description}
                onChange={(evt) => this.updateInfo(evt)}
        />

        <button onClick={ (evt) => this.addIsland(evt) }>Add your Island</button>

  		</div>
  	);
	}
}

export default AddIsland;
