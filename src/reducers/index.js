import { combineReducers } from 'redux';

import repos from './reposReducer';
import user from './userReducer';
import single from './singleReducer';

const rootReducer = combineReducers({
	repos,
	user,
	single
});

export default rootReducer;
