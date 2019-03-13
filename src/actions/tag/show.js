import api from "../../apis/api";
import {
    FETCH_TAG_REQUEST,
    FETCH_TAG_SUCCESS,
    FETCH_TAG_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_TAG_REQUEST };
}

export function success(payload) {
    return { type: FETCH_TAG_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_TAG_ERROR, payload };
}

export const fetchTag = id => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get(`/tags/${id}`);
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
