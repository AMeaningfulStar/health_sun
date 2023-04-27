import React, { useState } from 'react';
import MedicineModal from './MedicineModal';

import { BiSearch } from 'react-icons/bi';

const MedicineSearchBox = () => {
  const [ isShow, setIsShow ] = useState(false);

  return (
    <div className='absolute w-[71.5vw] h-[11vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
      <div className='absolute w-[auto] top-[1.5vh] left-[1vw] flex flex-row gap-[0.5vw]'>
        <input
          type='text'
          className='w-[66vw] h-[4vh] rounded-sm border-[1px] border-solid border-[#D2D2D2] text-[#B0B0B0] pl-[1vw]'
          value={'약 이름으로 검색하세요'}
        />
        <button className='w-[3vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[20px] text-[#FFFFFF]'/>
        </button>
      </div>
      <div className='absolute w-[auto] top-[6.5vh] left-[1vw] '>
        <button className='text-[15px] text-[#969595] font-semibold hover:text-[#707070]' onClick={() => setIsShow(true)}>[모양으로 검색하기]</button>
        <MedicineModal isShow={ isShow } setIsShow={ setIsShow } />
      </div>
    </div>
  )
}

export default MedicineSearchBox