import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
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

  return (
    <div>
      <Title title='HTML 笔 记' />
      <Content Component={<PageChange data={htmldata} />} />
    </div>
  )
})

export default HTMLNote