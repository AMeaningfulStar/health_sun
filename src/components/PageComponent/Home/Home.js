import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import MyHealthCondition from './MyHealthCondition';
import MedicineInfo from './MedicineInfo';
import VaccinationAdvise from './VaccinationAdvise';

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
        width = {22}
        height = {35}
        left = {67}
        top = {15.5}
      >
        예약 정보
      </ContentBox>
      <VaccinationAdvise />
      <MedicineInfo />
    </MainLayout>
  )
}

export default Home