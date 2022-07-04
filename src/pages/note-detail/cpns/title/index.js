import React, { memo } from 'react'

// 工具
import { TitleWrapper } from './style'

const Title = memo((props) => {
    let { title, type } = props;
    return (
        <TitleWrapper className='wrap-v2'>
            <div className='title'>{title}</div>
            <div className='type'>{type}</div>
        </TitleWrapper>
    )
})

export default Title