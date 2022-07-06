import React, { memo } from 'react';
import moment from 'moment';

// 工具
import { WebCardWrapper } from './style';
import { webList } from '@/common/local-data';

const WebCard = memo((props) => {
    let { note, gallery, diary } = props;
    let now = moment().format('YYYY-MM-DD');
    let startDate = moment('2022-06-01').format('YYYY-MM-DD');
    let days = moment(now).diff(startDate, 'day');
    let showList = [note, gallery, diary, days];
    return (
        <WebCardWrapper>
            <div className='title'>网站数据</div>
            <div className='line'></div>
            <ul className='list'>
                {
                    webList.map((item, index) => {
                        return (
                            <li key={item}>
                                <span>{`${item}: `}</span>
                                <span>{showList[index]}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </WebCardWrapper>
    )
})

export default WebCard