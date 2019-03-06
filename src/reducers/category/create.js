import {
    CREATE_CATEGORY_LOADING,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR
} from '../../constants/actionTypes';

const initialState = {
    loading: true,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_LOADING:
            return { ...state, loading: action.loading };
        case CREATE_CATEGORY_SUCCESS:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_CATEGORY_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}