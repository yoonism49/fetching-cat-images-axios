import { combineReducers } from 'redux';

import categories from './categoryReducer';
import cats from './catsReducer';
import fav from './favReducer';
const rootReducer = combineReducers({
	categories,
	cats,
	fav
});

export default rootReducer;
