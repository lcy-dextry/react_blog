import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

// 获取笔记
export const getNotes = res => ({
    type: actionType.GET_NOTES,
    notes: res.data
})

export const getNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .get()
            .then(res => {
                dispatch(getNotes(res))
            })
    }
}