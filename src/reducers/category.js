import _ from "lodash";
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from "../constants/actionTypes";

const initialState = {
    items: {},
    created: 0,
    deleted: 0,
    updated: 0,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
        case FETCH_CATEGORY_REQUEST:
        case CREATE_CATEGORY_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
        case DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true
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
                    ..._.mapKeys(action.payload, "id")
                },
                isLoading: false,
                error: null
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                isLoading: false,
                error: null
            };
        case CREATE_CATEGORY_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                created: action.payload.id,
                isLoading: false,
                error: null
            };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                updated: action.payload.id,
                isLoading: false,
                error: null
            };
        case DELETE_CATEGORY_SUCCESS:
            return {
                items: {
                    ..._.omit(state.items, action.payload)
                },
                deleted: action.payload,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};
