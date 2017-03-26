// Library/tool imports
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Custom component imports
import App from './components/App.js';

// TODO: Render your routes inside the router
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>
), document.getElementById("placeholder"));
