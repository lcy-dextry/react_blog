import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getInterviewNotes = res => ({
    type: actionType.GET_INTERVIEW_NOTES,
    interview: res.data
})

export const getInterviewNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("面试")
            })
            .get()
            .then(res => {
                dispatch(getInterviewNotes(res))
            })
    }
}