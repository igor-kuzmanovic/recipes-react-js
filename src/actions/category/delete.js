import api from '../../apis/recipes';
import {
    DELETE_CATEGORY_LOADING,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading(loading) {
    return { type: DELETE_CATEGORY_LOADING, loading };
}
  
export function success(payload) {
    return { type: DELETE_CATEGORY_SUCCESS, payload };
}

export function error(error) {
    return { type: DELETE_CATEGORY_ERROR, error };
}

export const deleteCategory = id => async dispatch => {
    dispatch(loading(true));
    dispatch(error(''));

    try {
        await api.delete(`/categories/${id}`);

        dispatch(loading(false));
        dispatch(success(id));
    }
    catch(error) {
        dispatch(loading(false));
        dispatch(error(error.response.data.detail));
    }
};