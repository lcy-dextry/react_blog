import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   css: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_CSS_NOTES:
            return state.set('css', action.css);
        default:
            return state;
    }
}

export { reducer };