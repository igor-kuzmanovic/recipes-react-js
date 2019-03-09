import api from "../../apis/recipes";
import {
    UPDATE_RECIPE_LOADING,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: UPDATE_RECIPE_LOADING };
}

export function success(payload) {
    return { type: UPDATE_RECIPE_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_RECIPE_ERROR, payload };
}

export const updateRecipe = (id, formValues) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(
            `/recipes/${id}`,
            ...parseFormValues(formValues)
        );
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

function parseFormValues(formValues) {
    return {
        ...formValues,
        ingredients: formValues.ingredients.map(ingredient => {
            return `/api/ingredients/${ingredient}`;
        }),
        category: `/api/categories/${formValues.category}`,
        tags: formValues.tags.map(tag => {
            return `/api/tags/${tag}`;
        }),
        imageUrl: "http://localhost:8000/images/default.jpeg"
    };
}
