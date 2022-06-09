import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


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
          return <NoteBox key={item._id}
            title={item.title}
            date={item.publish_date} />
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