import authApi from "../../apis/auth";
import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: AUTH_REQUEST };
}

export function success(payload) {
    return { type: AUTH_SUCCESS, payload };
}

export function error(payload) {
    return { type: AUTH_FAILURE, payload };
}

export const signIn = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        const response = await authApi.post("/login", formValues);
        dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
        callback();
    } catch (err) {
        console.log(err);
        dispatch({ type: AUTH_FAILURE, payload: "Invalid login credentials" });
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
