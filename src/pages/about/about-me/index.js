import React, { memo } from 'react';
import '@/assets/css/transitionstyle.css';

// 工具
import { AboutMeWrapper } from './style';
import { SmileOutlined } from '@ant-design/icons';

// 自定义
import { text, selfIntroduce, contact } from '@/common/local-data'

const AboutMe = memo(() => {
    return (
        <AboutMeWrapper className='wrap-v2'>
            <div>{text}</div>
            <div className='tag'>
                <i className='smile'><SmileOutlined /></i>
                <span>关于我</span>
            </div>
            <ul className='myself'>
                {
                    selfIntroduce.map(item => {
                        return <li>{item}</li>
                    })
                }
            </ul>

            <div className='tag'>
                <i className='smile'><SmileOutlined /></i>
                <span>联系方式</span>
            </div>
            <ul className='contact'>
                {
                    contact.map((item, index) => {
                        return index === 2 ?
                            (<>
                                <span>{item.title}: </span>
                                <a href={item.link}>{item.link}</a>
                            </>) :
                            <li>{`${item.title}: ${item.link}`}</li>
                    })
                }
            </ul>
        </AboutMeWrapper>
    )
})

export default AboutMe