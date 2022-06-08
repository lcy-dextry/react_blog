import React, { memo } from 'react';


// 工具
import { ContentWrapper } from './style'

const Content = memo((props) => {
    const { Component='' } = props;

    return (
        <ContentWrapper className='wrap-v2'>
            {Component}
        </ContentWrapper>
    )
})

export default Content