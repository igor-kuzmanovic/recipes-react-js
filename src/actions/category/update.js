import api from '../../apis/recipes';
import {
    UPDATE_CATEGORY_LOADING,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading() {
    return { type: UPDATE_CATEGORY_LOADING };
}
  
export function success(payload) {
    return { type: UPDATE_CATEGORY_SUCCESS, payload };
}

export function error(payload) {
    return { type: UPDATE_CATEGORY_ERROR, payload };
}

export const updateCategory = (id, formValues) => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.put(`/categories/${id}`, formValues);
        dispatch(success(response.data));
    }
    catch(err) {
        console.log(err);
        dispatch(error(err.message));
    }
};

export function reset() {
    return dispatch => {
        dispatch(error(null));
    };
}