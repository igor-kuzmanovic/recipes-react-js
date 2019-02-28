import api from '../apis/recipes';
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constants/actionTypes';

export const fetchCategories = () => async dispatch => {
    const response = await api.get('/categories');

    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const fetchCategory = id => async dispatch => {
    const response = await api.get(`/categories/${id}`);

    dispatch({ type: FETCH_CATEGORY, payload: response.data });
};

export const createCategory = formValues => async dispatch => {
    const response = await api.post('/categories', { ...formValues });

    dispatch({ type: CREATE_CATEGORY, payload: response.data });
};

export const updateCategory = (id, formValues) => async dispatch => {
    const response = await api.put(`/categories/${id}`, formValues);

    dispatch({ type: UPDATE_CATEGORY, payload: response.data });
};

export const deleteCategory = id => async dispatch => {
    await api.delete(`/categories/${id}`);

    dispatch({ type: DELETE_CATEGORY, payload: id });
};