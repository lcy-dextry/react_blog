import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 自定义
import Title from 'c/title';
import Content from 'c/content';

// 工具
import { getMsgAction } from './store/actionCreator';
import Msg from './cpns';
import { MessageWrapper } from './style';

const Message = memo(() => {
  const dispatch = useDispatch();

  const { diarydata } = useSelector(
    state => ({
      diarydata: state.getIn(['diary', 'diary'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getMsgAction())
  }, [dispatch]);

  const component = (
    <ul className='diary-list'>
      {
        diarydata.map(item => {
          return (
            <Msg key={item._id}
              content={item.content}
              date={item.date}
              feeling={item.feeling}
            />
          )
        })
      }
    </ul >
  )

  return (
    <MessageWrapper>
      <Title title='日 记' />
      <Content Component={component} />
    </MessageWrapper>
  )
})

export default Message