import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import NoteBox from 'c/note-wrapper';
import { getESNotesAction } from './store/actionCreator';

const ES6Note = memo(() => {
  const dispatch = useDispatch();
  const { esdata } = useSelector(
    state => ({
      esdata: state.getIn(['es', 'es'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getESNotesAction())
  }, [dispatch]);

  const articles = (
    <ul>
      {
        esdata.map(item => {
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
      <Title title='ES6 笔 记' />
      <Content Component={articles} />
    </div>
  )
})

export default ES6Note