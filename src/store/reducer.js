import { combineReducers } from 'redux-immutable';

import { reducer as galleryReducer } from '@/pages/pics/store';

const reducer = combineReducers({
    gallery: galleryReducer
})

export default reducer;