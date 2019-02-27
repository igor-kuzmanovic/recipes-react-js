import _ from 'lodash';
import {
    FETCH_INGREDIENTS,
    FETCH_INGREDIENT,
    CREATE_INGREDIENT,
    EDIT_INGREDIENT,
    DELETE_INGREDIENT
} from '../constants/action-types';

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INGREDIENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case FETCH_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };

        case CREATE_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };

        case DELETE_INGREDIENT:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}