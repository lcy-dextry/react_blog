import React, { memo } from 'react'

// 工具
import { TitleWrapper } from './style'

const Title = memo((props) => {
    const { title } = props;
    return (
        <TitleWrapper className='wrap-v2'>
            <div>{title}</div>
        </TitleWrapper>
    )
})

export default Title;