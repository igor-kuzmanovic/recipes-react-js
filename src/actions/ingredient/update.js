import api from "../../apis/recipes";
import {
    UPDATE_INGREDIENT_LOADING,
    UPDATE_INGREDIENT_SUCCESS,
    UPDATE_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPDATE_INGREDIENT_LOADING };
}

export function success(payload) {
    return { type: UPDATE_INGREDIENT_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_INGREDIENT_ERROR, payload };
}

export const updateIngredient = (id, formValues) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(`/ingredients/${id}`, formValues);
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
