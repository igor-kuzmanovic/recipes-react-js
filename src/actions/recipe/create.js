import api from "../../apis/recipes";
import {
    CREATE_RECIPE_LOADING,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_RECIPE_LOADING };
}

export function success(payload) {
    return { type: CREATE_RECIPE_SUCCESS, payload };
}

export function error(payload) {
    return { type: CREATE_RECIPE_ERROR, payload };
}

export const createRecipe = formValues => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.post("/recipes", {
            ...parseFormValues(formValues)
        });
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
