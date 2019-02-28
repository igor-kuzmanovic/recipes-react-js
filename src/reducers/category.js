import _ from 'lodash';
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_CATEGORY:
        case CREATE_CATEGORY:
        case UPDATE_CATEGORY:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_CATEGORY:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}