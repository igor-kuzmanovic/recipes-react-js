import api from '../apis/recipes';
import {
    FETCH_TAGS,
    FETCH_TAG,
    CREATE_TAG,
    UPDATE_TAG,
    DELETE_TAG
} from '../constants/actionTypes';

export const fetchTags = () => async dispatch => {
    try {
        const response = await api.get('/tags');

        dispatch({ type: FETCH_TAGS, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const fetchTag = id => async dispatch => {
    try {
        const response = await api.get(`/tags/${id}`);

        dispatch({ type: FETCH_TAG, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const createTag = formValues => async dispatch => {
    try {
        const response = await api.post('/tags', { ...formValues });

        dispatch({ type: CREATE_TAG, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const updateTag = (id, formValues) => async dispatch => {
    try {
        const response = await api.put(`/tags/${id}`, formValues);

        dispatch({ type: UPDATE_TAG, payload: response.data });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};

export const deleteTag = id => async dispatch => {
    try {
        await api.delete(`/tags/${id}`);

        dispatch({ type: DELETE_TAG, payload: id });
    }
    catch(error) {
        window.alert(error.response.data.detail);
    }
};