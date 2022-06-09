import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const changeCSSNotesAction = res => ({
    type: actionType.CHANGE_CSS_NOTES,
    css: res.data
})

export const getCSSNotesAction = () => {
    return dispatch => {
        db.collection('articles')
            .where({
                type_id: _.eq("css")
            })
            .get()
            .then(res => {
                dispatch(changeCSSNotesAction(res))
            })
    }
}