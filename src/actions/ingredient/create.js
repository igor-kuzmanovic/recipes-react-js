import api from "../../apis/api";
import {
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_INGREDIENT_REQUEST };
}

export function success(payload) {
    return { type: CREATE_INGREDIENT_SUCCESS, payload };
}

export function error(payload) {
    return { type: CREATE_INGREDIENT_ERROR, payload };
}

export const createIngredient = formValues => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/ingredients", { ...formValues });
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
