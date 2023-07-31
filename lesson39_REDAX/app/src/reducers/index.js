import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { newPostsReducer } from './newPostReducer';

const rootReducer = combineReducers({
    postRed: postReducer,
    newPosts: newPostsReducer,
});

export default rootReducer;