import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
    interview: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_INTERVIEW_NOTES:
            return state.set('interview', action.interview);
        default:
            return state;
    }
}

export { reducer };