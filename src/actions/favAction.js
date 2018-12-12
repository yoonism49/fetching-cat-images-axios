import axios from 'axios';
import * as types from './actionTypes';

export function loadFavCatsSuccess(fav) {
	return {
		type: types.LOAD_FAV_CATS_SUCCESS,
		fav
	};
}

export function loadFavoriteCats() {
	return function(dispatch) {
		const defaultOp = {
          headers: {
            'x-api-key' : localStorage.getItem('TOKEN'),
            'Content-Type': 'application/json'
          }
        };
		return axios
			.get(`https://api.thecatapi.com/v1/favourites`, defaultOp, {params:{limit: 20, sub_id: 'm7wya8'}})
			.then(images => {
				dispatch(loadFavCatsSuccess(images.data));
			})
			.catch(err => {
				throw err;
			});
	};
}