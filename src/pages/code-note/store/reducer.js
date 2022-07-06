import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   code: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_CODE_NOTES:
            return state.set('code', action.code);
        default:
            return state;
    }
}

export { reducer };