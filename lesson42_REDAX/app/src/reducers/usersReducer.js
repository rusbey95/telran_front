const usersReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.payload]
        case 'DELETE_USER':
            return state.filter((elem) => elem.id !== action.payload);
        default:
            return state
    }
}

export default usersReducer;