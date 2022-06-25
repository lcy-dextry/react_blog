import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const getReactNotes = res => ({
    type: actionType.GET_REACT_NOTES,
    react: res.data
})

export const getReactNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .where({
                type: _.eq("React")
            })
            .get()
            .then(res => {
                dispatch(getReactNotes(res))
            })
    }
}