import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const changeHTMLNotesAction = res => ({
    type: actionType.CHANGE_HTML_NOTES,
    html: res.data
})

export const getHTMLNotesAction = () => {
    return dispatch => {
        db.collection('articles')
            .where({
                type_id: _.eq("html")
            })
            .get()
            .then(res => {
                dispatch(changeHTMLNotesAction(res))
            })
    }
}