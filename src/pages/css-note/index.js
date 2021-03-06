import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
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

  return (
    <div>
      <Title title='CSS 笔 记' />
      <Content Component={<PageChange data={cssdata} />} />
    </div>
  )
})

export default CSSNote