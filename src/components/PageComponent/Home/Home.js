import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import MyHealthCondition from './MyHealthCondition';

const Home = () => {
  const ContentBox = ({ width, height, left, top, children }) => {
    return(
      <div
        className='bg-[#FBF7F4] w-[}] h-[40vh] rounded-lg absolute left-[16vw] top-[15.5vh]'
        style={{
          width: `${ width }vw`,
          height: `${ height }vh`,
          left: `${ left }vw`,
          top: `${ top }vh`
        }}  
      >
        { children }
      </div>
    )
  }
  return (
    <MainLayout>
      <MyHealthCondition />
      <ContentBox
        width = {24}
        height = {35}
        left = {65}
        top = {15.5}
      >
        예약 정보
      </ContentBox>
      <ContentBox
        width = {48}
        height = {27}
        left = {16}
        top = {56.5}
      >
        예방접종 추천
      </ContentBox>
      <ContentBox
        width = {24}
        height = {32}
        left = {65}
        top = {51.5}
      >
        내복약 정보
      </ContentBox>
    </MainLayout>
  )
}

export default Home