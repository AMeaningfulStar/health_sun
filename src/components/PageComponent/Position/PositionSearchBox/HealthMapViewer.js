import React from 'react';
import { BiSearch } from 'react-icons/bi';

const HealthMapViewer = () => {
  return (
    <div className='absolute w-[30vw] h-[58vh] left-[1vw] top-[8vh] bg-white rounded-md drop-shadow-lg z-10'>
      <div className='flex flex-row gap-[0.5vw] ml-[0.5vw] mt-[1vh]'>
        <input type='text' placeholder='병원명 및 약국명 입력' className='w-[25vw] h-[5vh] pl-[0.5vw] rounded-sm border-[#afafaf] border-[0.5px]' />
        <button className='w-[3.5vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[22px] text-[#FFFFFF]' />
        </button>
      </div>
      <div className='w-[30vw] h-[50vh] p-[1vh] rounded-md'>
        <div className='w-[29vw] h-[50vh] border-2 border-dashed'>
          <p className='w-[100%] leading-[50vh] text-center font-semibold text-[20px] text-[#AEAEAE]'>지역을 선택하여 검색해주세요</p>
        </div>
      </div>
    </div>
  )
}

export default HealthMapViewer