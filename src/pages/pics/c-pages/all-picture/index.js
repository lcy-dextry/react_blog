import React, { Fragment, memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import PicCard from 'c/pic-card';

// 工具
import { PicWrapper } from './style';
import { changePicTypeAction } from '../../store/actionCreator';
import { gallery } from '../../store/state';

const AllPicture = memo(() => {
  const dispatch = useDispatch();
  const { gallerydata } = useSelector(
    state => ({
      gallerydata: state.getIn(['gallery', 'gallery'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(changePicTypeAction(gallery))
  }, [dispatch]);

  const piclist = gallerydata.map(item => {
    return (
      <NavLink key={item.type} to={item.link}>
        <PicCard info={{ url: item.url, type: item.type, desc: item.desc }} />
      </NavLink>
    )
  })

  return (
    <Fragment>
      <PicWrapper>
        <Title title='图 库' />
        <Content Component={piclist} />
      </PicWrapper>
    </Fragment>

  )
})

export default AllPicture;