import api from "../../apis/api";
import {
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_CATEGORY_REQUEST };
}

export function success(payload) {
    return { type: CREATE_CATEGORY_SUCCESS, payload };
}

export function error(payload) {
    return { type: CREATE_CATEGORY_ERROR, payload };
}

export const createCategory = formValues => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/categories", { ...formValues });
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
