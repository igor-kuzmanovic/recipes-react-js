import api from '../apis/recipes';
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constants/actionTypes';

export const fetchCategories = () => async dispatch => {
    try {
        const response = await api.get('/categories');

        dispatch({type: FETCH_CATEGORIES, payload: response.data});
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const fetchCategory = id => async dispatch => {
    try {
        const response = await api.get(`/categories/${id}`);

        dispatch({ type: FETCH_CATEGORY, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const createCategory = formValues => async dispatch => {
    try {
        const response = await api.post('/categories', { ...formValues });

        dispatch({ type: CREATE_CATEGORY, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const updateCategory = (id, formValues) => async dispatch => {
    try {
        const response = await api.put(`/categories/${id}`, formValues);

        dispatch({ type: UPDATE_CATEGORY, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const deleteCategory = id => async dispatch => {
    try {
        await api.delete(`/categories/${id}`);

        dispatch({ type: DELETE_CATEGORY, payload: id });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};