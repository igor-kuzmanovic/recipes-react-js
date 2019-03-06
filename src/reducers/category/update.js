import _ from 'lodash';
import {
    UPDATE_CATEGORY_LOADING,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_LOADING:
            return action.loading;
        case UPDATE_CATEGORY_SUCCESS:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_CATEGORY_ERROR:
            return action.error;
        default:
            return state;
    }
}