import api from '../../apis/recipes';
import {
    FETCH_CATEGORY_LOADING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from '../../constants/actionTypes';

export function loading() {
    return { type: FETCH_CATEGORY_LOADING };
}
  
export function success(payload) {
    return { type: FETCH_CATEGORY_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_CATEGORY_ERROR, payload };
}

export const fetchCategory = id => async dispatch => {
    dispatch(loading());
    try {
        const response = await api.get(`/categories/${id}`);
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