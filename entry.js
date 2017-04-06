// Library/tool imports
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Custom component imports
import App from './components/app.js';
import AddIsland from './components/add_island.js';
import EditIsland from './components/edit_island.js';
import IslandDetail from './components/island_detail.js';
import IslandMap from './components/island_map.js';
import ErrorPage from './components/error_page.js';
import IslandList from './components/island_list.js';

// all my routes to various components
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={IslandList}/>
			<Route path="island-list" component={IslandList}/>
			<Route path="add-island" component={AddIsland}/>
			<Route path="edit-island/:id" component={EditIsland}/>
			<Route path="island/:id" component={IslandDetail}/>
			<Route path="island-map" component={IslandMap}/>
			<Route path="*" component={ErrorPage}/>
		</Route>
	</Router>
), document.getElementById("placeholder"));


