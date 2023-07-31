const posts = [
    {
        id: 1,
        content: 'Post 1',
    },
    {
        id: 2,
        content: 'Post 2',
    },
    {
        id: 3,
        content: 'Post 3',
    },
]

const postReducers = (state = posts, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'DELETE_POST': 
            return state.filter((post) => post.id !== action.payload);
        default:
            return state;
    }
}
export default postReducers;