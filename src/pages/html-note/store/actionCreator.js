import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getHTMLNotes = res => ({
    type: actionType.GET_HTML_NOTES,
    html: res.data
})

export const getHTMLNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("HTML")
            })
            .get()
            .then(res => {
                dispatch(getHTMLNotes(res))
            })
    }
}