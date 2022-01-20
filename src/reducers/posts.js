const postsReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_POSTS':
            return action.payload;
        case 'GET_ONE_POST':
            return action.payload;
        case 'CREATE_POST':
            return [...state, action.payload]
        default :
            return state;
    }
}

export default postsReducer;