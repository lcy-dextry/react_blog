import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

// 自定义数据
import { noteLinks } from '@/common/local-data';

// 工具
import { DropdownWrapper } from './style';

const Dropdown = memo(() => {
    return (
        <DropdownWrapper>
            <ul className='noteLink-list'>
                {
                    noteLinks.map(item => {
                        return <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
                    })
                }
            </ul>
        </DropdownWrapper>
    )
})

export default Dropdown;
