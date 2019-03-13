import api from "../../apis/api";
import {
    DELETE_TAG_REQUEST,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: DELETE_TAG_REQUEST };
}

export function success(payload) {
    return { type: DELETE_TAG_SUCCESS, payload };
}

export function error(payload) {
    return { type: DELETE_TAG_ERROR, payload };
}

export const deleteTag = id => async dispatch => {
    dispatch(loading());
    try {
        await api.delete(`/tags/${id}`);
        dispatch(success(id));
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
