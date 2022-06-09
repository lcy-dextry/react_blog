import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import NoteBox from 'c/note-wrapper';
import { getReactNotesAction } from './store/actionCreator';

const ReactNote = memo(() => {
  const dispatch = useDispatch();
  const { reactdata } = useSelector(
    state => ({
      reactdata: state.getIn(['react', 'react'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getReactNotesAction())
  }, [dispatch]);

  const articles = (
    <ul>
      {
        reactdata.map(item => {
          return <NoteBox key={item._id}
            title={item.title}
            date={item.publish_date} />
        })
      }
    </ul>
  )
  return (
    <div>
      <Title title='React 笔 记'/>
      <Content Component={articles} />
    </div>
  )
})

export default ReactNote