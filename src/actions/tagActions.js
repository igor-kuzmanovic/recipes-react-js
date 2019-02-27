import api from '../apis/api';
import {
    FETCH_TAGS,
    FETCH_TAG,
    CREATE_TAG,
    EDIT_TAG,
    DELETE_TAG
} from './types';

export const fetchTags = () => async dispatch => {
    const response = await api.get('/tags');

    dispatch({ type: FETCH_TAGS, payload: response.data });
};

export const fetchTag = id => async dispatch => {
    const response = await api.get(`/tags/${id}`);

    dispatch({ type: FETCH_TAG, payload: response.data });
};

export const createTag = formValues => async dispatch => {
    const response = await api.post('/tags', { ...formValues });

    dispatch({ type: CREATE_TAG, payload: response.data });
};

export const editTag = (id, formValues) => async dispatch => {
    const response = await api.put(`/tags/${id}`, formValues);

    dispatch({ type: EDIT_TAG, payload: response.data });
};

export const deleteTag = id => async dispatch => {
    await api.delete(`/tags/${id}`);

    dispatch({ type: DELETE_TAG, payload: id });
};