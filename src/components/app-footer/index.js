import React, { memo } from 'react';

// 自定义组件
import { utilsList } from '@/common/local-data';

// 工具
import { BackTop } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { AppFooterWrapper } from './style';


const AppFooter = memo(() => {

    return (

        <AppFooterWrapper>
            <div className='code-link'>
                <span>个人工具箱</span>
                <a href="todo">「源代码」</a>
            </div>
            <ul className='utils'>
                {
                    utilsList.map(item => {
                        return <button key={item}>{item}</button>
                    })
                }
            </ul>
            <BackTop className='backTop' visibilityHeight={10}>
                <div><CaretUpOutlined /></div>
            </BackTop>
        </AppFooterWrapper>
    )
})

export default AppFooter