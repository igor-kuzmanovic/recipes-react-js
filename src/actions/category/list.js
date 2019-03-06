import api from '../../apis/recipes';
import {
    FETCH_CATEGORIES_LOADING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR
} from '../../constants/actionTypes';
  
export function loading() {
    return { type: FETCH_CATEGORIES_LOADING };
}
  
export function success(payload) {
    return { type: FETCH_CATEGORIES_SUCCESS, payload };
}

export function error(payload) {
    return { type: FETCH_CATEGORIES_ERROR, payload };
}

export const fetchCategories = () => async dispatch => {
    dispatch(loading());

    try {
        const response = await api.get('/categories');

        dispatch(success(response.data));
    }
    catch(err) {
        console.log(err);

        dispatch(error(err.message));
    }
};