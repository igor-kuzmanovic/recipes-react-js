import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from "../constants/actionTypes";

const initialState = {
    hasUpdated: false,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_USER_ERROR:
            return {
                ...state,
                hasUpdated: false,
                isLoading: false,
                error: action.payload
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                hasUpdated: true,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};
