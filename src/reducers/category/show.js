import _ from 'lodash';
import {
    FETCH_CATEGORY_LOADING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_LOADING:
            return action.loading;
        case FETCH_CATEGORY_SUCCESS:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_CATEGORY_ERROR:
            return action.error;
        default:
            return state;
    }
}