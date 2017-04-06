import React from 'react';

class SearchBar extends React.Component {

	render() {
		return (
			<div className="search-bar-container">
				<input  type="text"
						value={ this.props.searchTerm }
						onChange= {(evt) => this.props.onSearchChanged(evt)}
						placeholder="Search for an island"/>
			</div>
		
		)
	}
}

export default SearchBar;
