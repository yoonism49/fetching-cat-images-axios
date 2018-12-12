import axios from 'axios';
import * as types from './actionTypes';

export function loadCategorySuccess(categories) {
	return {
		type: types.LOAD_CATEGORY_SUCCESS,
		categories
	};
}

export function loadCategory() {
	return function(dispatch) {
		return axios
			.get(`https://api.thecatapi.com/v1/categories`, {  params: {limit: 10}}, {headers: {
            'x-api-key': localStorage.getItem('TOKEN'),
            }})
			.then(categories => {
				dispatch(loadCategorySuccess(categories.data));
			})
			.catch(err => {
				throw err;
			});
	};
}

