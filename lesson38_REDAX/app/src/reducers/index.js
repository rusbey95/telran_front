import clickerReducer from './clicker';
import postReducers from './post';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    clicker: clickerReducer,
    posts: postReducers,
});

export default rootReducer;