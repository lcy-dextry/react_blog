import React, { memo } from 'react';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PicCard from 'c/pic-card'
import { animalList } from '@/common/local-data';

const Animal = memo(() => {
  const piclist = animalList.map(item => {
    return (
        <PicCard key={item.url}
        info={{ url: item.url}} />
    )
  })

  return (
    <div className='wrap-v2'>
      <Title title='动物' />
      <Content Component={piclist}/>
    </div>
  )
})

export default Animal