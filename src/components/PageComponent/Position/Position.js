import React, { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import KakaoMap from '../../KakaoMap/KakaoMap';

const Position = () => {
  const [ isShow, setIsShow ] = useState(false);

  const SearchBox = () => {
    if(isShow){
      return <div className='absolute w-[30vw] h-[58vh] left-[1vw] top-[8vh] bg-white rounded-md drop-shadow-lg z-10'></div>
    }
  }

  return (
    <MainLayout>
      <KakaoMap>
        <div className='absolute flex flex-row gap-x-[1vw] left-[1vw] top-[1vh] w-[71.5vw] z-10'>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>건강 지도 보기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>병원 및 약국 종류별 찾기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>우리 동네 좋은 병원 찾기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => setIsShow(!isShow)}>전문 병원 찾기</div>
        </div>
      </KakaoMap>
      <SearchBox />
    </MainLayout>
  )
}

export default Position