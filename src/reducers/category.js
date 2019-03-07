import _ from 'lodash';
import {
    FETCH_CATEGORIES_LOADING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORY_LOADING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
    CREATE_CATEGORY_LOADING,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_LOADING,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    DELETE_CATEGORY_LOADING,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../constants/actionTypes';

const initialState = {
    items: {},
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_LOADING:
        case FETCH_CATEGORY_LOADING:
        case CREATE_CATEGORY_LOADING:
        case UPDATE_CATEGORY_LOADING:
        case DELETE_CATEGORY_LOADING:
            return { 
                ...state, 
                isLoading: true,
                error: null
            };
        case FETCH_CATEGORIES_ERROR:
        case FETCH_CATEGORY_ERROR:
        case CREATE_CATEGORY_ERROR:
        case UPDATE_CATEGORY_ERROR:
        case DELETE_CATEGORY_ERROR:
            return { 
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_CATEGORIES_SUCCESS:
            return { 
                items: {
                    ...state.items, 
                    ..._.mapKeys(action.payload, 'id')
                },
                isLoading: false,
                error: null
            };
        case FETCH_CATEGORY_SUCCESS:
        case CREATE_CATEGORY_SUCCESS:
        case UPDATE_CATEGORY_SUCCESS:
            return { 
                items: {
                    ...state.items, 
                    [action.payload.id]: action.payload
                },
                isLoading: false,
                error: null
            };
        case DELETE_CATEGORY_SUCCESS:
            return {
                items: {
                    ..._.omit(state.items, action.payload)
                },
                isLoading: false,
                error: null
            }
        default:
            return state;
    }
}