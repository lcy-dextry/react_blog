import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getCSSNotes = res => ({
    type: actionType.GET_CSS_NOTES,
    css: res.data
})

export const getCSSNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("CSS")
            })
            .get()
            .then(res => {
                dispatch(getCSSNotes(res))
            })
    }
}