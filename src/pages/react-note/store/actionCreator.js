import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const changeReactNotesAction = res => ({
    type: actionType.CHANGE_REACT_NOTES,
    react: res.data
})

export const getReactNotesAction = () => {
    return dispatch => {
        db.collection('articles')
            .where({
                type_id: _.eq("react")
            })
            .get()
            .then(res => {
                dispatch(changeReactNotesAction(res))
            })
    }
}