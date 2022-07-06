import React, { memo, useState } from 'react';

// 工具
import { Button, Popover } from 'antd';
import { SelfCardWrapper } from './style';
import { contact } from '@/common/local-data';
import { NavLink } from 'react-router-dom';

const SelfCard = memo((props) => {
    let { diary, gallery, note } = props;
    const [qq, setqq] = useState(false);
    const [email, setEmail] = useState(false);
    const [github, setGithub] = useState(false);
    const qqHide = () => {
        setqq(false);
    };
    const emailHide = () => {
        setEmail(false);
    };
    const githubHide = () => {
        setGithub(false);
    };
    const type = [qq, email, github];
    const setType = [setqq, setEmail, setGithub];
    const hideType = [qqHide, emailHide, githubHide];

    return (
        <SelfCardWrapper>
            <div className='avatar-part'>
                <div className='img'></div>
                <div className='name'>Grace</div>
                <div className='introduce'>转码选手的前端学习记录</div>
            </div>
            <ul className='web-part'>
                <NavLink to='/note' className='note-num'>
                    <div>笔记</div>
                    <div>{note}</div>
                </NavLink>
                <NavLink to='/pic' className='gallery-num'>
                    <div>图库</div>
                    <div>{gallery}</div>
                </NavLink>
                <NavLink to='/msg' className='diary-num'>
                    <div>日记</div>
                    <div>{diary}</div>
                </NavLink>
            </ul>
            <div className='guide-part'>
                <div className='title'>联 系 我</div>
                <ul className='social-tools'>
                    {
                        contact.map((item, index) => {
                            return (
                                <Popover
                                    key={item.title}
                                    content={<a onClick={hideType[index]}>{item.link}</a>}
                                    trigger="click"
                                    visible={type[index]}
                                >
                                    <Button type="primary" onClick={e => setType[index](!type[index])}>{item.emoji}</Button>
                                </Popover>
                            )
                        })
                    }
                </ul>
            </div>
        </SelfCardWrapper>
    )
})

export default SelfCard