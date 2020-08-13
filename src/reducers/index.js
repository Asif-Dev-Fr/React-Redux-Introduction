import counterReducer from './counter';
import loggedReducer from './isLogged';

import { combineReducters, combineReducers } from 'redux';
import counterReducter from './counter';
import loggedReducter from './isLogged';

const allReducers = combineReducers({
    counter: counterReducter,
    logged: loggedReducter
});

export default allReducers;