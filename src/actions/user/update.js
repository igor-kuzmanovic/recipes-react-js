import api from "../../apis/api";
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPDATE_USER_REQUEST };
}

export function success(payload) {
    return { type: UPDATE_USER_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_USER_ERROR, payload };
}

export const updateUser = formValues => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(`/user/update`, formValues);
        dispatch(success(response.data));
    } catch (err) {
        dispatch(error(err));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
