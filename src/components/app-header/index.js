import React, { Fragment, memo } from 'react'
import { AppHeaderWrapper } from './style';
import { NavLink } from 'react-router-dom';

// 工具
import { HomeOutlined, SettingFilled } from '@ant-design/icons';

// 自定义
import { headerLinks, adminUrl } from '@/common/local-data';
import Dropdown from './dropdown';

const AppHeader = memo(() => {
  const linkType = (item, index) => {
    if (index === 0) {
      return (
        <Fragment key={item.title}>
          <NavLink to={item.link}>
            {item.title}
          </NavLink>
          <Dropdown />
        </Fragment>
      )
    } else {
      return <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
    }
  }

  return (
    <AppHeaderWrapper>
      <div className='wrap-v1'>
        <NavLink className='home' to='/home'>
          <HomeOutlined style={{ color: '#fff', fontSize: '26px' }} />
        </NavLink>

        <ul className='wrap-v2'>
          {
            headerLinks.map((item, index) => {
              return linkType(item, index)
            })
          }
        </ul>

        <a href={adminUrl} className='setting'>
          <SettingFilled style={{ color: '#fff', fontSize: '26px' }} />
        </a>
      </div>
    </AppHeaderWrapper>
  )
})

export default AppHeader