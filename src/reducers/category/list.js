import _ from 'lodash';
import {
    FETCH_CATEGORIES_LOADING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR
} from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_LOADING:
            return action.loading;
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_CATEGORIES_ERROR:
            return action.error;
        default:
            return state;
    }
}