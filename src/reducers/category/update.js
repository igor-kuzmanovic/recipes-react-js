import {
    UPDATE_CATEGORY_LOADING,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {
    loading: true,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_LOADING:
            return { ...state, loading: action.loading };
        case UPDATE_CATEGORY_SUCCESS:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_CATEGORY_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}