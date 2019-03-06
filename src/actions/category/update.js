import api from '../../apis/recipes';
import {
    UPDATE_CATEGORY_LOADING,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR
} from '../constants/actionTypes';

export function loading(loading) {
    return { type: UPDATE_CATEGORY_LOADING, loading };
}
  
export function success(payload) {
    return { type: UPDATE_CATEGORY_SUCCESS, payload };
}

export function error(error) {
    return { type: UPDATE_CATEGORY_ERROR, error };
}

export const updateCategory = (id, formValues) => async dispatch => {
    dispatch(loading(true));
    dispatch(error(''));

    try {
        const response = await api.put(`/categories/${id}`, formValues);

        dispatch(loading(false));
        dispatch(success(response.data));
    }
    catch(error) {
        dispatch(loading(false));
        dispatch(error(error.response.data.detail));
    }
};