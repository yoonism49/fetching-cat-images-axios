import axios from 'axios';
import * as types from './actionTypes';

export function loadSingleRepoSuccess(single) {
	return {
		type: types.LOAD_SINGLE_REPO_SUCCESS,
		single
	};
}
export function loadSingleRepo(singleRepos) {
	return function(dispatch) {
		console.log('loadSingleRepo');
		return axios
			.get(`https://api.github.com/search/repositories?q=${singleRepos}`)
			.then(single => {
				dispatch(loadSingleRepoSuccess(single.data));
			})
			.catch(err => {
				throw err;
			});
	};
}

