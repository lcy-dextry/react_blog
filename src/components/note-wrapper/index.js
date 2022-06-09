import React, { memo } from 'react'
import { NoteWrapper } from './style'

const NoteBox = memo((props) => {
    const { title, date } = props
    return (
        <NoteWrapper className='wrap-v2'>
            <div className='title'>{title}</div>
            <div className='date'>{date}</div>
        </NoteWrapper>
    )
})

export default NoteBox