import _ from 'lodash';

import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case FETCH_CATEGORY:
            return { ...state, [action.payload.id]: action.payload };

        case CREATE_CATEGORY:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_CATEGORY:
            return { ...state, [action.payload.id]: action.payload };

        case DELETE_CATEGORY:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}