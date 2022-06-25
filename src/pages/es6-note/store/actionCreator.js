import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getESNotes = res => ({
    type: actionType.GET_ES_NOTES,
    es: res.data
})

export const getESNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("ES6")
            })
            .get()
            .then(res => {
                dispatch(getESNotes(res))
            })
    }
}