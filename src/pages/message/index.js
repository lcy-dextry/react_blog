import React, { memo } from 'react'

// 自定义
import Title from 'c/title';
import Content from 'c/content';

const Message = memo(() => {
  return (
    <div>
      <Title title='日 记'/>
      <Content />
    </div>
  )
})

export default Message