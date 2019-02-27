import _ from 'lodash';

import {
    FETCH_TAGS,
    FETCH_TAG,
    CREATE_TAG,
    EDIT_TAG,
    DELETE_TAG
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case FETCH_TAG:
            return { ...state, [action.payload.id]: action.payload };

        case CREATE_TAG:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_TAG:
            return { ...state, [action.payload.id]: action.payload };

        case DELETE_TAG:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}