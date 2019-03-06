import { combineReducers } from 'redux';
import listReducer from './list';
import showReducer from './show';
import createReducer from './create';
import updateReducer from './update';
import deleteReducer from '/delete';

export default combineReducers({
    list: listReducer,
    show: showReducer,
    create: createReducer,
    update: updateReducer,
    delete: deleteReducer
});