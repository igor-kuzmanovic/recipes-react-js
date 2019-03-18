import api from "../../apis/api";
import {
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPDATE_CATEGORY_REQUEST };
}

export function success(payload) {
    return { type: UPDATE_CATEGORY_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_CATEGORY_ERROR, payload };
}

export const updateCategory = (id, formValues) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(`/categories/${id}`, formValues);
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
