import React, { memo } from 'react'

// 自定义
import Title from 'c/title';

const Message = memo(() => {
  return (
    <div>
      <Title title='留 言'/>
    </div>
  )
})

export default Message