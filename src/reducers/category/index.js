import { combineReducers } from 'redux';
import listReducer from './list';
import showReducer from './show';
import createReducer from './create';
import updateReducer from './update';
import deleteReducer from './delete';

export default combineReducers({
    listReducer,
    showReducer,
    createReducer,
    updateReducer,
    deleteReducer
});