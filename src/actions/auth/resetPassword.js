import api from "../../apis/api";
import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: RESET_PASSWORD_REQUEST };
}

export function success(payload) {
    return { type: RESET_PASSWORD_SUCCESS, payload };
}

export function error(payload) {
    return { type: RESET_PASSWORD_FAILURE, payload };
}

export const resetPassword = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        await api.post("/reset_password", formValues);
        dispatch(success(true));
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
