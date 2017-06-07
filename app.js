import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import AppRoot from './components/AppRoot';
import AppSearch from './components/AppSearch';
import AppPlace from './components/AppPlace';

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={AppRoot} />
		<Route path="/place/:id" component={AppPlace} />
		<Route path="/search(/:uses)(/:county)(/:max_people)(/:keywords)" component={AppSearch} />
	</Router>),
	document.getElementById('app-root')
);