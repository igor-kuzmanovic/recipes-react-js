import api from "../../apis/api";
import {
    DELETE_INGREDIENT_REQUEST,
    DELETE_INGREDIENT_SUCCESS,
    DELETE_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: DELETE_INGREDIENT_REQUEST };
}

export function success(payload) {
    return { type: DELETE_INGREDIENT_SUCCESS, payload };
}

export function error(payload) {
    return { type: DELETE_INGREDIENT_ERROR, payload };
}

export const deleteIngredient = id => async dispatch => {
    dispatch(loading());
    try {
        await api.delete(`/ingredients/${id}`);
        dispatch(success(id));
    } catch (err) {
        dispatch(error(err));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
