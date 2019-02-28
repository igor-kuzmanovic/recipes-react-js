import _ from 'lodash';
import {
    FETCH_TAGS,
    FETCH_TAG,
    CREATE_TAG,
    UPDATE_TAG,
    DELETE_TAG
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_TAG:
        case CREATE_TAG:
        case UPDATE_TAG:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TAG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}