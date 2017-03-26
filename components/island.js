// this is our ISLAND component

import React from 'react';

class Island extends React.Component {
  
  	render() {

		// check if the island has an image
		// if it does, provide the image URL
		// if it does not, provide a default image URL
		var imgUrl = this.props.islandImage ? this.props.islandImage : "https://upload.wikimedia.org/wikipedia/commons/e/ec/Small_Island_in_Lower_Saranac_Lake.jpg";

		var divStyle = {
		       backgroundImage: 'url(' + imgUrl + ')'
		   }

        return (

			<div className="island-container" key={this.props.islandId}>
				<div className="island-banner-image" style={ divStyle }></div>
				<h2>{ this.props.islandName }</h2>
				<h3>{ this.props.islandLocation }</h3>
				<p>{ this.props.islandDescription }</p>

			</div>
    	
    	);
  	}
}

export default Island;
