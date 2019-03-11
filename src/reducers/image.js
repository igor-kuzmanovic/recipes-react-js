import {
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_ERROR
} from "../constants/actionTypes";

const initialState = {
    items: {},
    uploaded: null,
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPLOAD_IMAGE_ERROR:
            return {
                ...state,
                uploaded: 0,
                isLoading: false,
                error: action.payload
            };
        case UPLOAD_IMAGE_SUCCESS:
            return {
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                },
                uploaded: action.payload.id,
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};
