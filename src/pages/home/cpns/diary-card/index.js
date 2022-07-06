import React, { memo } from 'react';

// 工具
import { DiaryCardWrapper } from './style'

const DiaryCard = memo((props) => {
    let { item } = props;
    return (
        <DiaryCardWrapper>
            <div className='feeling'>{item.feeling}</div>
            <div className='content'>{item.content}</div>
            <div className='line'></div>
            <div className='date'>{item.date}</div>
        </DiaryCardWrapper>
    )
})

export default DiaryCard