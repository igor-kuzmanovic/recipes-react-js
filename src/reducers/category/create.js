import _ from 'lodash';
import {
    CREATE_CATEGORY_LOADING,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_LOADING:
            return action.loading;
        case CREATE_CATEGORY_SUCCESS:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_CATEGORY_ERROR:
            return action.error;
        default:
            return state;
    }
}