const i_state = {
	comments: [],
	pages_nums: -1,
	now_page: 1,
	page_comment: [],
	one_max: 7,
	select_comments: [],
	select_active: 'all'
};
const comments_reducer = (state, action) => {
	state = state || i_state;
	console.log(action.type);
	switch (action.type) {
		case 'ADD_COMMENT':
			return add(state, action.payload);
		case 'FIND_COMMENT':
			return find(state, action.payload);
		case 'CHANGE_COMMENT':
			return change(state, action.payload);
		case 'DELTEL_COMMENT':
			return deletel(state, action.payload);
		case 'GET_COMMENT':
			return get(state, action.payload);
		case 'PAGINATION_PAGE':
			return pagination(state, action.payload);
		case 'SHOW_FIND':
			return show_find(state, action.payload);
		case 'SHOW_DELETEL':
			return show_del(state, action.payload);
		case 'SHOW_ALL':
			return show_all(state, action.payload);
		case 'SHOW_NOT_DELETEL':
			return show_not_del(state, action.payload);
		default:
			return state;
	}
};

const get = (state, payload) => {
	console.log('GET_COMMENT', state, payload);
	return { ...state, ...payload, now_page: 1, one_max: 7, select_comments: payload.comments };
};

const add = (state, payload) => {
	console.log('ADD_COMMENT', { ...state, ...payload });
	state.pages_nums = Math.ceil(payload.comments.length / state.one_max);
	return { ...state, ...payload };
};

const find = (state, payload) => {
	console.log('FIND_COMMENT', state);
	return { ...state, ...payload };
};

const change = (state, payload) => {
	console.log('CHANGE_COMMENT', { ...state, ...payload });
	return { ...state, ...payload };
};

const deletel = (state, payload) => {
	state.comments = payload;
	console.log('DELTEL_COMMENT', { ...state, ...payload });
	return { ...state };
};

const pagination = (state, payload) => {
	console.log('pagination', { ...state, ...payload });
	return { ...state, ...payload };
};

const show_del = (state, payload) => {
	console.log('SHOW_DELETEL', { ...state, ...payload });
	return { ...state, ...payload };
};

const show_not_del = (state, payload) => {
	console.log('SHOW_NOT_DELETEL', state, payload);
	return { ...state, ...payload };
};

const show_all = (state, payload) => {
	console.log('SHOW_ALL', { ...state, ...payload });
	return { ...state, ...payload };
};

export default comments_reducer;
