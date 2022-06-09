import * as actionType from './actionType';
import { db,_ } from '@/utils/cloudBase';

export const changeESNotesAction = res => ({
    type: actionType.CHANGE_ES_NOTES,
    es: res.data
})

export const getESNotesAction = () => {
    return dispatch => {
        db.collection('articles')
            .where({
                type_id: _.eq("es6")
            })
            .get()
            .then(res => {
                dispatch(changeESNotesAction(res))
            })
    }
}