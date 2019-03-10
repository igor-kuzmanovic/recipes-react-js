import api from "../../apis/recipes";
import {
    DELETE_RECIPE_REQUEST,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: DELETE_RECIPE_REQUEST };
}

export function success(payload) {
    return { type: DELETE_RECIPE_SUCCESS, payload };
}

export function error(payload) {
    return { type: DELETE_RECIPE_ERROR, payload };
}

export const deleteRecipe = id => async dispatch => {
    dispatch(loading());
    try {
        await api.delete(`/recipes/${id}`);
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
