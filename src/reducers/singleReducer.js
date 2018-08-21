import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function singleReducer(state = initialState.single, action) {
	switch (action.type) {
		case types.LOAD_SINGLE_REPO_SUCCESS: {
			return action.single;
		}
		default:
			return state;
	}
}
