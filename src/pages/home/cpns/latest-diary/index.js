import React, { memo } from 'react';

// 自定义
import DiaryCard from '../diary-card';

// 工具
import { LatestDiaryWrapper } from './style'

const LatestDiary = memo((props) => {
  let { diary } = props;
  return (
    <LatestDiaryWrapper>
      <div className='title'>最新日记</div>
      <div className='line'></div>
      <ul className='list'>
        {
          diary.map((item, index) => {
            return <DiaryCard key={diary._id} item={item} />
          })
        }
      </ul>
    </LatestDiaryWrapper>
  )
})

export default LatestDiary