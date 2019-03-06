import api from '../../apis/recipes';
import {
    FETCH_CATEGORIES_LOADING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR
} from '../../constants/actionTypes';
  
export function loading(loading) {
    return { type: FETCH_CATEGORIES_LOADING, loading };
}
  
export function success(payload) {
    return { type: FETCH_CATEGORIES_SUCCESS, payload };
}

export function error(error) {
    return { type: FETCH_CATEGORIES_ERROR, error };
}

export const fetchCategories = () => async dispatch => {
    dispatch(loading(true));
    dispatch(error(''));

    try {
        const response = await api.get('/categories');

        dispatch(loading(false));
        dispatch(success(response.data));
    }
    catch(error) {
        dispatch(loading(false));
        dispatch(error(error.response.data.detail));
    }
};