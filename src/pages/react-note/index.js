import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
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

  return (
    <div>
      <Title title='React 笔 记' />
      <Content Component={<PageChange data={reactdata} />} />
    </div>
  )
})

export default ReactNote