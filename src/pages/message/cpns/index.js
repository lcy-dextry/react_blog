import React, { memo } from 'react'

// 工具
import { MsgWrapper } from './style'

const Msg = memo((props) => {
  let { content, date, feeling } = props;
  return (
    <MsgWrapper>
      <div className='avatar'></div>
      <ul className='msg-list'>
        <div className='msg'>{content}</div>
        <div className='date'>{date}</div>
        <div className='feeling'>{feeling}</div>
      </ul>
    </MsgWrapper>
  )
})

export default Msg