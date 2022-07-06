import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';

import NoteBox from 'c/note-wrapper';

const pageList = (data, start) => {
    return [...data].slice(start, start + 10)
}
const articles = (data, start, setStart) => (
    <>
        <ul>
            {
                pageList(data, start).map(item => {
                    return (
                        <NavLink key={item._id} to={`/detail?id=${item._id}`}>
                            <NoteBox
                                title={item.title}
                                date={item.date} />
                        </NavLink>
                    )
                })
            }
        </ul>
        <Pagination className='page-changer'
            defaultCurrent={1}
            total={data.length}
            pageSize={10}
            onChange={e => { setStart((e - 1) * 10) }} />
    </>
)

export default articles;