// this is our ISLAND component

import React from 'react';
import { Link } from 'react-router';

import IslandMap from './island_map';

class IslandDetail extends React.Component {
  
  	render() {


		var island = this.props.islands.find(island => island._id == this.props.params.id);

		if (island) {

			// check if the island has an image
			// if it does, provide the image URL
			// if it does not, provide a default image URL
			var imgUrl = island.image ? island.image : "https://upload.wikimedia.org/wikipedia/commons/e/ec/Small_Island_in_Lower_Saranac_Lake.jpg";
			
			var divStyle = {
			       backgroundImage: 'url(' + imgUrl + ')'
			};

			return (

				<div className="island-detail-container" key={ island._id }>
					<div className="island-detail-banner-image" style={ divStyle }></div>
					<h2>{ island.name }</h2>
					<h3>{ island.briefLocation }</h3>
					<p>{ island.description }</p>
					
					<p>{ island.latitude }</p>
					<p>{ island.longitude }</p>
					<div className="map-container">
						<IslandMap latitude={island.latitude} longitude={island.longitude} />
					</div>
					<button onClick={ (evt) => this.props.onDeleteIsland(island._id) }>Delete this Island</button>
					<Link to={ `/edit-island/${island._id}` }>
						<button>Edit this island</button>
					</Link>
				</div>
	    	
	    	);
	    } else {
	    	return null;
	    }
  	}
}

export default IslandDetail;