import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

// 获取笔记
export const getMsg = res => ({
    type: actionType.GET_MSG,
    diary: res.data
})

export const getMsgAction = () => {
    return dispatch => {
        db.collection('diary')
            .get()
            .then(res => {
                dispatch(getMsg(res))
            })
    }
}