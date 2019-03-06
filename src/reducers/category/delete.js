import _ from 'lodash';
import {
    DELETE_CATEGORY_LOADING,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_LOADING:
            return action.loading;
        case DELETE_CATEGORY_SUCCESS:
            return _.omit(state, action.payload);
        case DELETE_CATEGORY_ERROR:
            return action.error;
        default:
            return state;
    }
}