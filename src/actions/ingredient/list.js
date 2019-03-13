import api from "../../apis/api";
import {
    FETCH_INGREDIENTS_REQUEST,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: FETCH_INGREDIENTS_REQUEST };
}

export function success(payload) {
    return { type: FETCH_INGREDIENTS_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_INGREDIENTS_ERROR, payload };
}

export const fetchIngredients = () => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get("/ingredients");
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
