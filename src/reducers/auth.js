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
    SIGNOUT,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE
} from "../constants/actionTypes";
import jwt_decode from "jwt-decode";

const initialState = {
    user: localStorage.getItem("token")
        ? jwt_decode(localStorage.getItem("token"))
        : null,
    hasSignedUp: false,
    hasResetPassword: false,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case CONFIRM_SIGNUP_REQUEST:
        case SIGNIN_REQUEST:
        case RESET_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case SIGNUP_FAILURE:
        case CONFIRM_SIGNUP_FAILURE:
        case SIGNIN_FAILURE:
        case RESET_PASSWORD_FAILURE:
        case NEW_PASSWORD_FAILURE:
            return {
                ...state,
                hasSignedUp: false,
                hasResetPassword: false,
                isLoading: false,
                error: action.payload
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                hasSignedUp: true,
                isLoading: false,
                error: null
            };
        case CONFIRM_SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };
        case SIGNOUT:
            return {
                ...state,
                user: action.payload
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                hasResetPassword: true,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};
