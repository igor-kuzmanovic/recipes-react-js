import jwt_decode from "jwt-decode";
import api from "../../apis/api";
import {
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: NEW_PASSWORD_REQUEST };
}

export function success(payload) {
    return { type: NEW_PASSWORD_SUCCESS, payload };
}

export function error(payload) {
    return { type: NEW_PASSWORD_FAILURE, payload };
}

export const newPassword = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/new_password", formValues);
        dispatch(success(jwt_decode(response.data.token)));
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
