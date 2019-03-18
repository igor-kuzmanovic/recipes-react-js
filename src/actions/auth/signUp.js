import api from "../../apis/api";
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: SIGNUP_REQUEST };
}

export function success() {
    return { type: SIGNUP_SUCCESS, payload: true };
}

export function error(payload) {
    return { type: SIGNUP_FAILURE, payload };
}

export const signUp = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        await api.post("/register", formValues);
        dispatch(success());
        callback();
    } catch (err) {
        dispatch(error(err));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
