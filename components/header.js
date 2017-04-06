// this is our HEADER component

import { Link } from 'react-router';

// we need React, of course
import React from 'react';

// we're going to use our searchbar component
import SearchBar from './search_bar.js';

class Header extends React.Component {

  	render() {

  		var numberOfIslands = this.props.islands.length;

    	return (
    		<div className="header-container">
    			<h1>Another Island</h1>
    			<p>You have collected { numberOfIslands } islands!</p>
    			<Link to="/island-list">Islands</Link>
    			<Link to="/island-map">Map</Link>
          <Link to="/add-island">Add an Island</Link>
          <SearchBar searchTerm={this.props.searchTerm} onSearchChanged={(evt) => this.props.onSearchChanged(evt)}/>
    		</div>
    	);
  	}
}

export default Header;
