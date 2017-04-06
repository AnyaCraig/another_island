import React from "react";


class IslandMap extends React.Component {

	// determine whether this is being used to show all the islands
	// or only one island on an island detail page
	renderMapandMarkers(props) {

		// if there is an array of islands in props...
		if (props.islands) {

			// put the map center somewhere central
			var mapCenter = {
				lat: 43.9366700,
				lng: 12.4463900,
			};

			// set the zoom level and the mapcenter we defined earlier
		    var map = new google.maps.Map(this.map, {
		       zoom: 2,
		       center: mapCenter,
		    });

		    // loop over all the islands and make a marker for each
		    var marker, i;

    		for (i = 0; i < props.islands.length; i++) {  

				var coordinates = {
					lat: props.islands[i].latitude,
					lng: props.islands[i].longitude,
				}

      			marker = new google.maps.Marker({
        			position: coordinates,
        			map: map,
      			});
      		}

      	// otherwise, if the props are just latitude and longitude...
		} else if (props.latitude && props.longitude) {

			// set a coordinates object...
			var coordinates = {
				lat: props.latitude, 
				lng: props.longitude,
			};

			// which we will use as the centre of our map
			var map = new google.maps.Map(this.map, {
			   zoom: 8,
			   center: coordinates,
			});

			// and set a marker at the same spot
		    var marker = new google.maps.Marker({
		       position: coordinates,
		       map: map,
		    });
		}
	}

	// render all our markers when the component mounts
	componentDidMount() {
		this.renderMapandMarkers(this.props);
	}

	// render the markers again when the component receives props
	componentWillReceiveProps(props) {

		this.renderMapandMarkers(props);

	}

	render() {

		return (

			<div className="mapArea" ref={ (div) => this.map = div }></div>
		);
	}
}

export default IslandMap;
