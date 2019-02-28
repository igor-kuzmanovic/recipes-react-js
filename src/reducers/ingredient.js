import _ from 'lodash';
import {
    FETCH_INGREDIENTS,
    FETCH_INGREDIENT,
    CREATE_INGREDIENT,
    UPDATE_INGREDIENT,
    DELETE_INGREDIENT
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INGREDIENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_INGREDIENT:
        case CREATE_INGREDIENT:
        case UPDATE_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_INGREDIENT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}