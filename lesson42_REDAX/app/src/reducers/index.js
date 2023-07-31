import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';

const redusers = combineReducers({
    counter: counterReducer,
    users: usersReducer,
});

export default redusers;