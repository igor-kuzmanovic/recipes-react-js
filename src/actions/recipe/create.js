import api from "../../apis/api";
import {
    CREATE_RECIPE_REQUEST,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_ERROR
} from "../../constants/actionTypes";

export function loading() {
    return { type: CREATE_RECIPE_REQUEST };
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
        const response = await api.post(
            "/recipes",
            parseFormValues(formValues)
        );
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

function parseFormValues(formValues) {
    return {
        ...formValues,
        ingredients: formValues.ingredients.map(
            ingredient => `/api/ingredients/${ingredient}`
        ),
        category: `/api/categories/${formValues.category}`,
        tags: formValues.tags.map(tag => `/api/tags/${tag}`),
        image: `/api/media_objects/1`
    };
}
