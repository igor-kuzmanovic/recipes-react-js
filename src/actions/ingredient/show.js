import api from "../../apis/api";
import {
    FETCH_INGREDIENT_REQUEST,
    FETCH_INGREDIENT_SUCCESS,
    FETCH_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_INGREDIENT_REQUEST };
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
        dispatch(error(err));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
