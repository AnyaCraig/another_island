// this is our ISLAND component

import React from 'react';
import { Link } from 'react-router';

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

					<button onClick={(evt) => this.props.onDeleteIsland(this.props.islandId)}>Delete this Island</button>

				
				<Link to={`/island/${this.props.islandId}`}>
					<button>See more about {this.props.islandName}</button>
				</Link>
			</div>
    	
    	);
  	}
}

export default Island;
