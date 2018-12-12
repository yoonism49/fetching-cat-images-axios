import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function favReducer(state = initialState.fav, action) {
	switch (action.type) {
		case types.LOAD_FAV_CATS_SUCCESS: {
			return action.fav;
		}
		default:
			return state;
	}
}
