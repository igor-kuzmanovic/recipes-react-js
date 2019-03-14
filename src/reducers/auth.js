import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CONFIRM_SIGNUP_REQUEST,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNOUT
} from "../constants/actionTypes";

const initialState = {
    isLoggedIn: false,
    hasSignedUp: false,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case CONFIRM_SIGNUP_REQUEST:
        case SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case SIGNUP_FAILURE:
        case CONFIRM_SIGNUP_FAILURE:
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasSignedUp: action.payload,
                error: null
            };
        case CONFIRM_SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: action.payload,
                hasSignedUp: false,
                error: null
            };
        case SIGNOUT:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};
