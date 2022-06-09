import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   react: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_REACT_NOTES:
            return state.set('react', action.react);
        default:
            return state;
    }
}

export { reducer };