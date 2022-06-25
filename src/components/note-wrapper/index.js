import React, { memo } from 'react'
import { NoteWrapper } from './style'

const NoteBox = memo((props) => {
    const { title, date, url } = props;

    function isJump(url){
        if(url){
            window.location.href = url
        }else{
            return false;
        }
    }

    return (
        <NoteWrapper className='wrap-v2'>
            <div className='title'>{title}</div>
            <div className='date'>{date}</div>
            <button className='to-note'
                onClick={e => isJump(url)} />
        </NoteWrapper>
    )
})

export default NoteBox