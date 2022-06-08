import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Picture = memo(() => {
  return (
    <div>
        <Outlet />
    </div>
  )
})

export default Picture;