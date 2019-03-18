import api from "../../apis/api";
import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_TAGS_REQUEST };
}

export function success(payload) {
    return { type: FETCH_TAGS_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_TAGS_ERROR, payload };
}

export const fetchTags = () => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get("/tags");
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
