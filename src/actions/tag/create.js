import api from "../../apis/api";
import {
    CREATE_TAG_REQUEST,
    CREATE_TAG_SUCCESS,
    CREATE_TAG_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_TAG_REQUEST };
}

export function success(payload) {
    return { type: CREATE_TAG_SUCCESS, payload };
}

export function error(payload) {
    return { type: CREATE_TAG_ERROR, payload };
}

export const createTag = formValues => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/tags", { ...formValues });
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
