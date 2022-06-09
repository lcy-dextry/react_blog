import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

export const changeNotesAction = res => ({
    type: actionType.CHANGE_NOTES,
    notes: res.data
})

export const getNotesAction = () => {
    return dispatch => {
        db.collection('articles')
            .get()
            .then(res => {
                dispatch(changeNotesAction(res))
            })
    }
}