import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

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
          return <NoteBox key={item._id}
            title={item.title}
            date={item.publish_date} />
        })
      }
    </ul>
  )
  return (
    <div>
      <Title title='HTML 笔 记'/>
      <Content Component={articles} />
    </div>
  )
})

export default HTMLNote