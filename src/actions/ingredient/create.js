import api from "../../apis/recipes";
import {
    CREATE_INGREDIENT_LOADING,
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_INGREDIENT_LOADING };
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
        console.log(err);
        dispatch(error(err.message));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}
