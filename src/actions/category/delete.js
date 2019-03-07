import api from '../../apis/recipes';
import {
    DELETE_CATEGORY_LOADING,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading() {
    return { type: DELETE_CATEGORY_LOADING };
}
  
export function success(payload) {
    return { type: DELETE_CATEGORY_SUCCESS, payload };
}

export function error(payload) {
    return { type: DELETE_CATEGORY_ERROR, payload };
}

export const deleteCategory = id => async dispatch => {
    dispatch(loading());
    try {
        await api.delete(`/categories/${id}`);
        dispatch(success(id));
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