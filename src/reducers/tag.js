import _ from "lodash";
import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_ERROR,
    FETCH_TAG_REQUEST,
    FETCH_TAG_SUCCESS,
    FETCH_TAG_ERROR,
    CREATE_TAG_REQUEST,
    CREATE_TAG_SUCCESS,
    CREATE_TAG_ERROR,
    UPDATE_TAG_REQUEST,
    UPDATE_TAG_SUCCESS,
    UPDATE_TAG_ERROR,
    DELETE_TAG_REQUEST,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_ERROR
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
        case FETCH_TAGS_REQUEST:
        case FETCH_TAG_REQUEST:
        case CREATE_TAG_REQUEST:
        case UPDATE_TAG_REQUEST:
        case DELETE_TAG_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_TAGS_ERROR:
        case FETCH_TAG_ERROR:
        case CREATE_TAG_ERROR:
        case UPDATE_TAG_ERROR:
        case DELETE_TAG_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_TAGS_SUCCESS:
            return {
                items: {
                    ...state.items,
                    ..._.mapKeys(action.payload, "id")
                },
                isLoading: false,
                error: null
            };
        case FETCH_TAG_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                isLoading: false,
                error: null
            };
        case CREATE_TAG_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                created: action.payload.id,
                isLoading: false,
                error: null
            };
        case UPDATE_TAG_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                updated: action.payload.id,
                isLoading: false,
                error: null
            };
        case DELETE_TAG_SUCCESS:
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
