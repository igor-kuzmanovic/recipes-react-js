import _ from 'lodash';
import {
    DELETE_CATEGORY_LOADING,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {
    loading: true,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_LOADING:
            return { ...state, loading: action.loading };
        case DELETE_CATEGORY_SUCCESS:
            return _.omit(state, action.payload);
        case DELETE_CATEGORY_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}