import api from '../../apis/recipes';
import {
    FETCH_CATEGORY_LOADING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading(loading) {
    return { type: FETCH_CATEGORY_LOADING, loading };
}
  
export function success(payload) {
    return { type: FETCH_CATEGORY_SUCCESS, payload };
}

export function error(error) {
    return { type: FETCH_CATEGORY_ERROR, error };
}

export const fetchCategory = id => async dispatch => {
    dispatch(loading(true));
    dispatch(error(''));

    try {
        const response = await api.get(`/categories/${id}`);

        dispatch(loading(false));
        dispatch(success(response.data));
    }
    catch(error) {
        dispatch(loading(false));
        dispatch(error(error.response.data.detail));
    }
};