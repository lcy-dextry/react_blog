import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import NoteBox from 'c/note-wrapper';
import { getHTMLNotesAction } from './store/actionCreator';

const HTMLNote = memo(() => {
  const dispatch = useDispatch();
  const { htmldata } = useSelector(
    state => ({
      htmldata: state.getIn(['html', 'html'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getHTMLNotesAction())
  }, [dispatch]);

  const articles = (
    <ul>
      {
        htmldata.map(item => {
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
      <Title title='HTML 笔 记' />
      <Content Component={articles} />
    </div>
  )
})

export default HTMLNote