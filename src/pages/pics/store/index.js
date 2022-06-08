import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
    gallery: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_NEW_TYPE:
            return state.set('gallery', action.gallery);
        default:
            return state;
    }
}

export { reducer };