import React, { memo } from 'react'
import { HomeContentWrapper, HomeCoverWrapper, HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeCoverWrapper className='wrap-v2'>
          <span>L C Y 的 工 具 箱 {`:)`}</span>
      </HomeCoverWrapper>
 
      <HomeContentWrapper>

      </HomeContentWrapper>
    </HomeWrapper>
  )
})

export default Home