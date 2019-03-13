import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE
} from "../constants/actionTypes";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: action.payload,
                error: null
            };
        default:
            return state;
    }
};
