import api from "../../apis/recipes";
import {
    FETCH_RECIPE_REQUEST,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_RECIPE_REQUEST };
}

export function success(payload) {
    return { type: FETCH_RECIPE_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_RECIPE_ERROR, payload };
}

export const fetchRecipe = id => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get(`/recipes/${id}`);
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
