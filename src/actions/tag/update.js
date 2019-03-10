import api from "../../apis/recipes";
import {
    UPDATE_TAG_REQUEST,
    UPDATE_TAG_SUCCESS,
    UPDATE_TAG_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPDATE_TAG_REQUEST };
}

export function success(payload) {
    return { type: UPDATE_TAG_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_TAG_ERROR, payload };
}

export const updateTag = (id, formValues) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(`/tags/${id}`, formValues);
        dispatch(success(response.data));
    } catch (err) {
        console.log(err);
        dispatch(error(err.message));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
