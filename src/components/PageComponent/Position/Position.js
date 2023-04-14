import React, { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';

// 임시
import Map from '../../DesignFile/Map.png'

const Position = () => {
  const [ isShow, setIsShow ] = useState(false);

  const SearchBox = () => {
    if(isShow){
      return <div className='absolute w-[30vw] h-[58vh] left-[1vw] top-[8vh] bg-white rounded-md drop-shadow-lg'></div>
    }
  }

  return (
    <MainLayout>
      <img src={Map} alt='exemple' className='w-[73.5vw] h-[68vh] rounded-lg'/>
      <div className='absolute flex flex-row gap-x-[1vw] left-[1vw] top-[1vh] w-[71.5vw]'>
        <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>건강 지도 보기</div>
        <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>병원 및 약국 종류별 찾기</div>
        <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>우리 동네 좋은 병원 찾기</div>
        <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>전문 병원 찾기</div>
      </div>
      <SearchBox />
    </MainLayout>
  )
}

export default Position