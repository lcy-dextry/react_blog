import React, { memo } from 'react';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PicCard from 'c/pic-card'
import { peopleList } from '@/common/local-data';

const People = memo(() => {
  const piclist = peopleList.map(item => {
    return (
        <PicCard key={item.url}
        info={{ url: item.url}} />
    )
  })

  return (
    <div className='wrap-v2'>
      <Title title='人物' />
      <Content Component={piclist}/>
    </div>
  )
})

export default People;