import api from '../apis/api';
import {
    FETCH_INGREDIENTS,
    FETCH_INGREDIENT,
    CREATE_INGREDIENT,
    EDIT_INGREDIENT,
    DELETE_INGREDIENT
} from '../constants/action-types';

export const fetchIngredients = () => async dispatch => {
    const response = await api.get('/ingredients');

    dispatch({ type: FETCH_INGREDIENTS, payload: response.data });
};

export const fetchIngredient = id => async dispatch => {
    const response = await api.get(`/ingredients/${id}`);

    dispatch({ type: FETCH_INGREDIENT, payload: response.data });
};

export const createIngredient = formValues => async dispatch => {
    const response = await api.post('/ingredients', { ...formValues });

    dispatch({ type: CREATE_INGREDIENT, payload: response.data });
};

export const editIngredient = (id, formValues) => async dispatch => {
    const response = await api.put(`/ingredients/${id}`, formValues);

    dispatch({ type: EDIT_INGREDIENT, payload: response.data });
};

export const deleteIngredient = id => async dispatch => {
    await api.delete(`/ingredients/${id}`);

    dispatch({ type: DELETE_INGREDIENT, payload: id });
};