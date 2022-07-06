import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getCodeNotes = res => ({
    type: actionType.GET_CODE_NOTES,
    code: res.data
})

export const getCodeNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("算法题")
            })
            .get()
            .then(res => {
                dispatch(getCodeNotes(res))
            })
    }
}