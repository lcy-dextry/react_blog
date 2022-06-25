import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import NoteBox from 'c/note-wrapper';
import { getNotesAction } from './store/actionCreator';

const AllNote = memo(() => {
  const dispatch = useDispatch();
  const { notesdata } = useSelector(
    state => ({
      notesdata: state.getIn(['notes', 'notes'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getNotesAction())
  }, [dispatch]);

  const articles = (
    <ul>
      {
        notesdata.map(item => {
          return (
            <NavLink key={item._id} to={`/detail?id=${item._id}`}>
              <NoteBox 
                title={item.title}
                date={item.publish_date} />
            </NavLink>
          )
        })
      }
    </ul>
  )

  return (
    <div>
      <Title title='所 有 笔 记' />
      <Content Component={articles} />
    </div>
  )
})

export default AllNote