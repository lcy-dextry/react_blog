import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
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

  return (
    <div>
      <Title title='ES6 笔 记' />
      <Content Component={<PageChange data={esdata} />} />
    </div>
  )
})

export default ES6Note