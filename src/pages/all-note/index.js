import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
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

  return (
    <div>
      <Title title='所 有 笔 记' />
      <Content Component={<PageChange data={notesdata} />} />
    </div>
  )
})

export default AllNote