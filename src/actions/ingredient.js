import api from '../apis/recipes';
import {
    FETCH_INGREDIENTS,
    FETCH_INGREDIENT,
    CREATE_INGREDIENT,
    UPDATE_INGREDIENT,
    DELETE_INGREDIENT
} from '../constants/actionTypes';

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

export const updateIngredient = (id, formValues) => async dispatch => {
    const response = await api.put(`/ingredients/${id}`, formValues);

    dispatch({ type: UPDATE_INGREDIENT, payload: response.data });
};

export const deleteIngredient = id => async dispatch => {
    await api.delete(`/ingredients/${id}`);

    dispatch({ type: DELETE_INGREDIENT, payload: id });
};