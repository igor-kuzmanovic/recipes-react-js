import api from '../../apis/recipes';
import {
    CREATE_CATEGORY_LOADING,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading(loading) {
    return { type: CREATE_CATEGORY_LOADING, loading };
}
  
export function success(payload) {
    return { type: CREATE_CATEGORY_SUCCESS, payload };
}

export function error(error) {
    return { type: CREATE_CATEGORY_ERROR, error };
}

export const createCategory = formValues => async dispatch => {
    dispatch(loading(true));
    dispatch(error(''));

    try {
        const response = await api.post('/categories', { ...formValues });

        dispatch(loading(false));
        dispatch(success(response.data));
    }
    catch(error) {
        dispatch(loading(false));
        dispatch(error(error.response.data.detail));
    }
};