import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadCategory } from './actions/categoryAction';

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = store.getState().key;

	if (previousValue !== currentValue) {
		store.dispatch(loadCategory());
	}
}

const store = configureStore();

store.subscribe(() =>
  localStorage.setItem('TOKEN',  'd121b1cc-651b-47e1-9341-66860f487b09')
);
store.dispatch(loadCategory());

store.subscribe(handleChange);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
