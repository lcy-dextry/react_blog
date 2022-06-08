import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Note = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  )
})

export default Note