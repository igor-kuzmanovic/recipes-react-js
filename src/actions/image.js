import api from "../../apis/recipes";
import {
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPLOAD_IMAGE_REQUEST };
}

export function success(payload) {
    return { type: UPLOAD_IMAGE_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPLOAD_IMAGE_ERROR, payload };
}

export const uploadImage = image => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/media_objects", createForm(image));
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

function createForm(image) {
    const form = new FormData();
    form.append("file", image);
    return form;
}
