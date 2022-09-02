import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import NoteDisplayRight from './cpns/notes-display-right';
import NoteDisplayLeft from './cpns/notes-display-left';
import SelfCard from './cpns/self-card';
import WebCard from './cpns/web-card';
import LatestDiary from './cpns/latest-diary';

// 工具
import { Pagination } from 'antd';
import { HomeContentLeftWrapper, HomeContentRightWrapper, HomeCoverWrapper, HomeWrapper } from './style';
import { coverList } from '@/common/local-data';
import { getNotesAction } from '@/pages/all-note/store/actionCreator';
import { getMsgAction } from '@/pages/message/store/actionCreator';
import { changePicTypeAction } from '@/pages/pics/store/actionCreator';
import { gallery } from '../pics/store/state';
import CanvasTitle from './cpns/canvas';

const Home = memo(() => {
  const dispatch = useDispatch();
  const { notesdata, picdata, diarydata } = useSelector(
    state => ({
      notesdata: state.getIn(['notes', 'notes']),
      diarydata: state.getIn(['diary', 'diary']),
      picdata: state.getIn(['gallery', 'gallery']),
    }), shallowEqual)

  useEffect(() => {
    dispatch(getNotesAction());
    dispatch(getMsgAction());
    dispatch(changePicTypeAction(gallery))
  }, [dispatch]);

  // 页码跳转
  const [start, setStart] = useState(0);
  const pageList = (data, start) => {
    return [...data].slice(start, start + 5)
  }
  
  const showList = (data, start) => (
    <>
      <ul className='note-list'>
        {
          pageList(data, start).map((item, index) => {
            if (index % 2 === 0) {
              return <NoteDisplayLeft key={item._id} item={item} url={coverList[index % 5]} />
            } else {
              return <NoteDisplayRight key={item._id} item={item} url={coverList[index % 5]} />
            }
          })
        }
      </ul>
      <Pagination className='page-changer'
        defaultCurrent={1}
        total={data.length}
        pageSize={5}
        onChange={e => { setStart((e - 1) * 5) }} />
    </>
  )

  return (
    <HomeWrapper>
      <HomeCoverWrapper className='wrap-v2'>
        <CanvasTitle/>
      </HomeCoverWrapper>
      <div className='wrap-v1 content'>
        <HomeContentLeftWrapper>
          <div>
            {
              showList(notesdata, start)
            }
          </div>
        </HomeContentLeftWrapper>
        <HomeContentRightWrapper>
          <SelfCard
            diary={diarydata.length}
            note={notesdata.length}
            gallery={picdata.length} />
          <WebCard
            note={notesdata.length}
            gallery={picdata.length}
            diary={diarydata.length} />
          <LatestDiary
            diary={diarydata.slice(diarydata.length - 2, diarydata.length)} />
        </HomeContentRightWrapper>
      </div>

    </HomeWrapper>
  )
})

export default Home