// this is our parent APP component

// we need React, of course
import React from 'react';
import { browserHistory } from 'react-router';

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
	  		searchTerm: '',
	  	}
	  	
	  	this.refresh = this.refresh.bind(this);
	  	this.searchChanged = this.searchChanged.bind(this);
	  	this.addNewIsland = this.addNewIsland.bind(this);
	  	this.editIsland = this.editIsland.bind(this);
	  	this.deleteIsland = this.deleteIsland.bind(this);
	  	this.redirectToHome = this.redirectToHome.bind(this);
	}

	// this function refreshes the list of islands we see
	refresh() {

		// we get the islands that match the search term in state
		// set the new islands array in state
		// and send an error message in case it fails

		$.get('/api/islands?q=' + this.state.searchTerm)
		.then((islands) => { 
			this.setState({ islands: islands}) ;
		})
		.catch((err) => {
			this.setState({ error: err.message }); 
		});

	}

	// when the component mounts, we refresh the posts
	componentDidMount() {
		this.refresh();
	}

	searchChanged(evt) {
		this.setState({searchTerm: evt.target.value}, this.refresh);
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
	      this.redirectToHome();
	      this.refresh();
	   })
	}

	editIsland(islandId, islandObject) {

		// here is our ajax call for editing an existing island
		// we include the id that we want to edit and the object
		// containing the updated island information
		$.ajax({
		  method: 'PUT',
		  url: '/api/islands/' + islandId,
		  contentType: "application/json; charset=utf-8",
		  data: JSON.stringify(islandObject),
		  success: () => {
		    this.refresh();
		    this.redirectToHome();
		  },
		  error: (err) => {
		    this.setState({ errors: err.responseJSON.errors });
		  }
		});
	}

	deleteIsland(islandId) {

		// here, we delete an island based on its ID
		$.ajax({
			method: 'DELETE',
			url: '/api/islands/' + islandId,
		})
		.then(() => {
			this.refresh();
		})

	}

	// redirect to the main page
	redirectToHome() {
		browserHistory.push("/");
	}

  	render() {


    	return (
    		<div className="app-container">
    			<Header islands={this.state.islands}
    					searchTerm={this.state.searchTerm}
    					onSearchChanged={(evt) => this.searchChanged(evt)} 
    			/>

    			{
    				React.cloneElement(this.props.children, {
					islands: this.state.islands,
    			  	onDeleteIsland: (islandId) => this.deleteIsland(islandId),
    			  	onAddIsland: (islandObject) => this.addNewIsland(islandObject),
    			  	onEditIsland: (islandId, islandObject) => this.editIsland(islandId, islandObject),

    				})
    			}
    			
    		</div>
    	);
  	}
}

export default App;
