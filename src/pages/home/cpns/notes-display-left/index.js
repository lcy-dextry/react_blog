import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

// 工具
import { NoteDisplayWrapper } from './style';

const NoteDisplay = memo((props) => {
    let { item, url } = props;
    return (
        <NoteDisplayWrapper>
            <NavLink className='note-card' to={`/detail?id=${item._id}`}>
                <div className='content-part'>
                    <div className='triangle-left'></div>
                    <div className='content'>
                        <div className='text-nowrap'>
                            {
                                item.content
                                    .replace(/<a(.*?)>(.*?)<\/a>/g, '$2')
                                    .replace(/[# |**|`|>]/g, '')
                            }
                        </div>
                    </div>
                </div>
                <div className='note-part'>
                    <div className='title'>{item.title}</div>
                    <div className='date'>{item.date}</div>
                </div>
                <div className='img-part'>
                    <span className='type'>{item.type}</span>
                    <img className='img' src={url} />
                </div>
            </NavLink>
        </NoteDisplayWrapper>
    )
})

export default NoteDisplay;