import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PageChange from 'c/page-changer';
import { getInterviewNotesAction } from './store/actionCreator';

const InterviewNote = memo(() => {
  const dispatch = useDispatch();
  const { interviewdata } = useSelector(
    state => ({
      interviewdata: state.getIn(['interview', 'interview'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getInterviewNotesAction())
  }, [dispatch]);

  return (
    <div>
      <Title title='面 试 笔 记' />
      <Content Component={<PageChange data={interviewdata} />} />
    </div>
  )
})

export default InterviewNote