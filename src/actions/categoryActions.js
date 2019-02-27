import api from '../apis/api';
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from './types';

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

export const editCategory = (id, formValues) => async dispatch => {
    const response = await api.put(`/categories/${id}`, formValues);

    dispatch({ type: EDIT_CATEGORY, payload: response.data });
};

export const deleteCategory = id => async dispatch => {
    await api.delete(`/categories/${id}`);

    dispatch({ type: DELETE_CATEGORY, payload: id });
};