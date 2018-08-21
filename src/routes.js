import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import SingleRepository from './components/SingleRepository/SingleRepository';

export default (
	<Route exact path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="single/:singleName" component={SingleRepository} />
	</Route>
);
