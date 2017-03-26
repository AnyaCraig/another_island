// this is our HEADER component

// we need React, of course
import React from 'react';

class Header extends React.Component {

  	render() {

  		var numberOfIslands = this.props.islands.length;

    	return (
    		<div className="header-container">
    			<h1>Another Island</h1>
    			<p>You have collected { numberOfIslands } islands!</p>
    			<p>Islands</p>
    			<p>Map</p>
    		</div>
    	);
  	}
}

export default Header;
