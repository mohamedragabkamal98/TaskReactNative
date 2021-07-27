import {
	UPDATE_USER
} from '../actionTypes';

const INITIAL_STATE = {
	user: {},
	currentAddress: {}
};

export const sessionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {
				...state,
				user: action.data
			}
		default:
			break;
	}

	return state
};