import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import NoteBox from 'c/note-wrapper';
import { getCSSNotesAction } from './store/actionCreator';

const CSSNote = memo(() => {
  const dispatch = useDispatch();
  const { cssdata } = useSelector(
    state => ({
      cssdata: state.getIn(['css', 'css'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getCSSNotesAction())
  }, [dispatch]);

  const articles = (
    <ul>
      {
        cssdata.map(item => {
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
      <Title title='CSS 笔 记' />
      <Content Component={articles} />
    </div>
  )
})

export default CSSNote