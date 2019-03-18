import api from "../../apis/api";
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: SIGNIN_REQUEST };
}

export function success() {
    return { type: SIGNIN_SUCCESS, payload: true };
}

export function error(payload) {
    return { type: SIGNIN_FAILURE, payload };
}

export const signIn = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/login", formValues);
        dispatch(success());
        localStorage.setItem("token", response.data.token);
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
