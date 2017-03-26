// this is our parent APP component

// we need React, of course
import React from 'react';

// we need jQuery for the Ajax calls
import $ from 'jquery';

// we need our Sass files for styling
import './styles/styles.scss';

// here, we import our custom child components
import Header from './header.js';
import IslandList from './island_list.js';
import AddIsland from './add_island.js';

class App extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
	  		islands: [],
	  	}
	  	
	  	this.addNewIsland = this.addNewIsland.bind(this);
	  	this.refresh = this.refresh.bind(this);
	}

	// this function refreshes the list of islands we see
	refresh() {
		
		// we get the islands
		// set the new islands array in state
		// and send an error message in case it fails
		$.get('/api/islands')
		.then((islands) => { this.setState({ islands: islands}) })
		.catch((err) => {this.setState({ error: err.message }) });

	}

	// when the component mounts, we refresh the posts
	componentDidMount() {

		this.refresh();

	}

	addNewIsland(islandObject) {

		// here is our ajax call for posting a new image
		// we post the new image url to the database
		// then we clear out the newImage property in state
		// and refresh our posts
	   $.ajax({
	      method: 'POST',
	      url: '/api/islands',
	      data: JSON.stringify( islandObject ),
	      contentType: 'application/json'
	   })
	   .then((island) => {
	      this.refresh();
	   })
	}
  
  	render() {
    	return (
    		<div className="app-container">
    			<Header islands={this.state.islands} />
    			<IslandList islands={this.state.islands} />
    			<AddIsland onAddIsland={(islandObject) => this.addNewIsland(islandObject)} />
    		</div>
    	);
  	}
}

export default App;
