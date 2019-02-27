import api from '../apis/api';
import {
    FETCH_RECIPES,
    FETCH_RECIPE,
    CREATE_RECIPE,
    EDIT_RECIPE,
    DELETE_RECIPE
} from '../constants/action-types';

export const fetchRecipes = () => async dispatch => {
    const response = await api.get('/recipes');

    dispatch({ type: FETCH_RECIPES, payload: response.data });
};

export const fetchRecipe = id => async dispatch => {
    const response = await api.get(`/recipes/${id}`);

    dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const createRecipe = formValues => async dispatch => {
    const response = await api.post('/recipes', { ...formValues });

    dispatch({ type: CREATE_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async dispatch => {
    const response = await api.put(`/recipes/${id}`, formValues);

    dispatch({ type: EDIT_RECIPE, payload: response.data });
};

export const deleteRecipe = id => async dispatch => {
    await api.delete(`/recipes/${id}`);

    dispatch({ type: DELETE_RECIPE, payload: id });
};