import _ from "lodash";
import {
    FETCH_INGREDIENTS_REQUEST,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_ERROR,
    FETCH_INGREDIENT_REQUEST,
    FETCH_INGREDIENT_SUCCESS,
    FETCH_INGREDIENT_ERROR,
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_ERROR,
    UPDATE_INGREDIENT_REQUEST,
    UPDATE_INGREDIENT_SUCCESS,
    UPDATE_INGREDIENT_ERROR,
    DELETE_INGREDIENT_REQUEST,
    DELETE_INGREDIENT_SUCCESS,
    DELETE_INGREDIENT_ERROR
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
        case FETCH_INGREDIENTS_REQUEST:
        case FETCH_INGREDIENT_REQUEST:
        case CREATE_INGREDIENT_REQUEST:
        case UPDATE_INGREDIENT_REQUEST:
        case DELETE_INGREDIENT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_INGREDIENTS_ERROR:
        case FETCH_INGREDIENT_ERROR:
        case CREATE_INGREDIENT_ERROR:
        case UPDATE_INGREDIENT_ERROR:
        case DELETE_INGREDIENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_INGREDIENTS_SUCCESS:
            return {
                items: {
                    ...state.items,
                    ..._.mapKeys(action.payload, "id")
                },
                isLoading: false,
                error: null
            };
        case FETCH_INGREDIENT_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                isLoading: false,
                error: null
            };
        case CREATE_INGREDIENT_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                created: action.payload.id,
                isLoading: false,
                error: null
            };
        case UPDATE_INGREDIENT_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                updated: action.payload.id,
                isLoading: false,
                error: null
            };
        case DELETE_INGREDIENT_SUCCESS:
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
