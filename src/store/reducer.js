import { combineReducers } from 'redux-immutable';

import { reducer as galleryReducer } from '@/pages/pics/store/reducer';
import { reducer as notesReducer } from '@/pages/all-note/store/reducer';
import { reducer as cssReducer } from '@/pages/css-note/store/reducer';
import { reducer as esReducer } from '@/pages/es6-note/store/reducer';
import { reducer as htmlReducer } from '@/pages/html-note/store/reducer';
import { reducer as reactReducer } from '@/pages/react-note/store/reducer';
import { reducer as diaryReducer } from '@/pages/message/store/reducer';

const reducer = combineReducers({
    gallery: galleryReducer,
    notes: notesReducer,
    css: cssReducer,
    es: esReducer,
    html: htmlReducer,
    react: reactReducer,
    diary:diaryReducer
})

export default reducer;