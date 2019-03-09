import _ from "lodash";
import {
    FETCH_RECIPES_LOADING,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
    FETCH_RECIPE_LOADING,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_ERROR,
    CREATE_RECIPE_LOADING,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_ERROR,
    UPDATE_RECIPE_LOADING,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_ERROR,
    DELETE_RECIPE_LOADING,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_ERROR
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
        case FETCH_RECIPES_LOADING:
        case FETCH_RECIPE_LOADING:
        case CREATE_RECIPE_LOADING:
        case UPDATE_RECIPE_LOADING:
        case DELETE_RECIPE_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_RECIPES_ERROR:
        case FETCH_RECIPE_ERROR:
        case CREATE_RECIPE_ERROR:
        case UPDATE_RECIPE_ERROR:
        case DELETE_RECIPE_ERROR:
            return {
                ...state,
                created: 0,
                deleted: 0,
                updated: 0,
                isLoading: false,
                error: action.payload
            };
        case FETCH_RECIPES_SUCCESS:
            return {
                items: {
                    ...state.items,
                    ..._.mapKeys(action.payload, "id")
                },
                isLoading: false,
                error: null
            };
        case FETCH_RECIPE_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                isLoading: false,
                error: null
            };
        case CREATE_RECIPE_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                created: action.payload.id,
                isLoading: false,
                error: null
            };
        case UPDATE_RECIPE_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                updated: action.payload.id,
                isLoading: false,
                error: null
            };
        case DELETE_RECIPE_SUCCESS:
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
