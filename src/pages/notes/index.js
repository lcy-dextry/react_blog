import React, { memo } from 'react'

// 工具
import { Outlet } from 'react-router-dom'
import { NotesWrapper } from './style'

const Note = memo(() => {
  return (
    <NotesWrapper>
      <Outlet />
    </NotesWrapper>
  )
})

export default Note