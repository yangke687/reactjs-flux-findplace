import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import AppRoot from './components/AppRoot';
import AppSearch from './components/AppSearch';

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={AppRoot} />
		<Route path="/search" component={AppSearch} />
	</Router>),
	document.getElementById('app-root')
);