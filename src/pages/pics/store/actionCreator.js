import * as actionType from './actionType';

// 添加新相册
export const changePicTypeAction = (gallery) => ({
    type: actionType.ADD_NEW_TYPE,
    gallery
})