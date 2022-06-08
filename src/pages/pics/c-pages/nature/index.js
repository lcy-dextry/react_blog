import React, { memo } from 'react';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PicCard from 'c/pic-card'
import { natureList } from '@/common/local-data';

const Nature = memo(() => {
  const piclist = natureList.map(item => {
    return (
        <PicCard key={item.url}
        info={{ url: item.url}} />
    )
  })

  return (
    <div className='wrap-v2'>
      <Title title='风景' />
      <Content Component={piclist}/>
    </div>
  )
})

export default Nature;