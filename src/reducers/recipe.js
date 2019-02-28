import _ from 'lodash';
import {
    FETCH_RECIPES,
    FETCH_RECIPE,
    CREATE_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_RECIPE:
        case CREATE_RECIPE:
        case UPDATE_RECIPE:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_RECIPE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}