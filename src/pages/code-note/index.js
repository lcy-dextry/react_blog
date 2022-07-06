import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
import { getCodeNotesAction } from './store/actionCreator';

const CodeNote = memo(() => {
  const dispatch = useDispatch();
  const { codedata } = useSelector(
    state => ({
      codedata: state.getIn(['code', 'code'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getCodeNotesAction())
  }, [dispatch]);

  return (
    <div>
      <Title title='力 扣 笔 记' />
      <Content Component={<PageChange data={codedata} />} />
    </div>
  )
})

export default CodeNote