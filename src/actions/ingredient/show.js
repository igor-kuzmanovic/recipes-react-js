import api from "../../apis/recipes";
import {
    FETCH_INGREDIENT_LOADING,
    FETCH_INGREDIENT_SUCCESS,
    FETCH_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_INGREDIENT_LOADING };
}

export function success(payload) {
    return { type: FETCH_INGREDIENT_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_INGREDIENT_ERROR, payload };
}

export const fetchIngredient = id => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get(`/ingredients/${id}`);
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
