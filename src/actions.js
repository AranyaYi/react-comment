export const ADD_COMMENT = 'ADD_COMMENT';
export const FIND_COMMENT = 'FIND_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';
export const DELTEL_COMMENT = 'DELTEL_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_Find: 'SHOW_Find'
};

export const get_comment = (payload) => {
	return {
		type: GET_COMMENT,
		payload
	};
};

export const add_comment = (payload) => {
	return {
		type: ADD_COMMENT,
		payload
	};
};

export const find_comment = (payload) => {
	return {
		type: FIND_COMMENT,
		payload
	};
};
export const change_comment = (payload) => {
	return {
		type: CHANGE_COMMENT,
		payload
	};
};
export const deltel_comment = (payload) => {
	return {
		type: DELTEL_COMMENT,
		payload
	};
};