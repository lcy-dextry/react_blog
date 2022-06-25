import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   es: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_ES_NOTES:
            return state.set('es', action.es);
        default:
            return state;
    }
}

export { reducer };