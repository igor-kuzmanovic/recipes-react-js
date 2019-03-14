import authApi from "../../apis/auth";
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
} from "../../constants/actionTypes";

export function loading() {
    return { type: SIGNIN_REQUEST };
}

export function success(payload) {
    return { type: SIGNIN_SUCCESS, payload };
}

export function error(payload) {
    return { type: SIGNIN_FAILURE, payload };
}

export const signIn = (formValues, callback) => async dispatch => {
    dispatch(loading());
    try {
        const response = await authApi.post("/login", formValues);
        dispatch({ type: SIGNIN_SUCCESS, payload: true });
        localStorage.setItem("token", response.data.token);
        callback();
    } catch (err) {
        console.log(err);
        dispatch({ type: SIGNIN_FAILURE, payload: err });
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
