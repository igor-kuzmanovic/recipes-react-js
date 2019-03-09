import api from "../../apis/recipes";
import {
    FETCH_TAGS_LOADING,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_TAGS_LOADING };
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
        console.log(err);
        dispatch(error(err.message));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
