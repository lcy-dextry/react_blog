import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   html: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_HTML_NOTES:
            return state.set('html', action.html);
        default:
            return state;
    }
}

export { reducer };