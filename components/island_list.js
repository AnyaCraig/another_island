// this is our ISLAND LIST component

import React from 'react';

// we need the ISLAND component
// because we're going to map over it
import Island from './island.js';

class IslandList extends React.Component {
  
  	render() {
    	return (
    		<div className="island-list-container">
    			{ 
    				// map over the list of islands
    				// passed down as a prop
    				this.props.islands.map((island) => {

						// return our ISLAND component
						// for each island in the array
						return (
							<Island 
								islandName = {island.name}
								islandLocation = {island.briefLocation}
								islandImage = {island.image}
								islandDescription = {island.description}
                                islandLatitude = {island.latitude}
                                islandLongitude = {island.longitude}
                                islandId = {island._id}
                                key={island._id}
                                onDeleteIsland = {(islandId) => this.props.onDeleteIsland(islandId)}
							/>
						);
    				})
    			}
    		</div>
    	);
  	}
}

export default IslandList;
