import React, { memo } from 'react'

// 工具
import { AboutWrapper } from './style';

// 自定义
import Title from 'c/title';
import Content from 'c/content';
import AboutMe from './about-me';

const About = memo(() => {

  return (
    <AboutWrapper>
      <Title title='关 于' />
      <Content Component={<AboutMe />}/>
    </AboutWrapper>
  )
})

export default About