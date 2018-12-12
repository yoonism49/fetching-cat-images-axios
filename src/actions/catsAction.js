import axios from 'axios';
import * as types from './actionTypes';
export function loadCatsSuccess(cats) {
	return {
		type: types.LOAD_CATS_SUCCESS,
		cats
	};
}

export function loadCats(categoryId) {
	return function(dispatch) {
        const defaultOptions = {
          headers: {
              'x-api-key': localStorage.getItem('TOKEN'),
          }
        };
		return axios
			.get(`https://api.thecatapi.com/v1/images/search`, {params: {limit: 20,category_ids:[categoryId]}}, {headers: defaultOptions.headers})
			.then(response => {
				dispatch(loadCatsSuccess(response.data));
			})
			.catch(err => {
				throw err;
			});
	};
}

export function postFavorite(imageId) {
	return function() {
		const defaultOptions = {
        headers: {
          'x-api-key': localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
        
        };
		return axios
			.post(`https://api.thecatapi.com/v1/favourites/`, {image_id: imageId, sub_id: 'm7wya8'}, {headers: defaultOptions.headers})
			.catch(err => {
				throw err;
			});
	};
}
