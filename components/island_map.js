import React from "react";


class IslandMap extends React.Component {

	componentDidMount() {
		this.renderMapandMarkers(this.props);
	}

	renderMapandMarkers(props) {

		if (props.islands) {

			var mapCenter = {
				lat: 43.9366700,
				lng: 12.4463900,
			};

		    var map = new google.maps.Map(this.map, {
		       zoom: 2,
		       center: mapCenter,
		    });

		    var marker, i;

    		for (i = 0; i < props.islands.length; i++) {  

				var coordinates = {
					lat: props.islands[i].latitude,
					lng: props.islands[i].longitude,
				}

				console.log("We're in the markers for loop");

				console.log(coordinates);

      			marker = new google.maps.Marker({
        			position: coordinates,
        			map: map,
      			});

      			console.log(marker);

      		}

		} else if (props.latitude && props.longitude) {


			var coordinates = {
				lat: props.latitude, 
				lng: props.longitude,
			};

			var map = new google.maps.Map(this.map, {
			   zoom: 8,
			   center: coordinates,
			});

		    var marker = new google.maps.Marker({
		       position: coordinates,
		       map: map,
		    });
		}
	}

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


