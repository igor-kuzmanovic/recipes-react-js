import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE
} from "../constants/actionTypes";

const initialState = {
    token: null,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return { ...state, isLoading: true, error: null };
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
                token: action.payload
            };
        default:
            return state;
    }
};
