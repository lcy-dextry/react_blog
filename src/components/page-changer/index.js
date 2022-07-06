import React, { memo, useState } from 'react'


// 自定义
import { PageChangerWrapper } from './style';
import articles from '@/utils/functions/pagechanger';

const PageChange = memo((props) => {
    let { data } = props;
    const [start, setStart] = useState(0);

    return (
        <PageChangerWrapper>
            {
                articles(data, start, setStart)
            }
        </PageChangerWrapper>
    )
})

export default PageChange;