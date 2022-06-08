import React, { memo } from 'react'

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import ToDoList from 'c/to-do-list';

const Memo = memo(() => {
  return (
    <div>
      <Title title='To do list'/>
      <Content Component={<ToDoList />}/>
    </div>
  )
})

export default Memo