import React, { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const MedicalExamination = () => {
  const [ isShow, setIsShow ] = useState(false);

  const SeletBox = () => {
    if(isShow){
      return(
        <div className='absolute w-[27vw] h-[30vh] top-[6vh] z-10 rounded-md border-[1px] bg-[#FFFFFF]'>
          
        </div>
      )
    }
  }

  return (
    <MainLayout>
      <div className='absolute w-[71.5vw] h-[12vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
        <div className='flex flex-row gap-[1vw] absolute h-[5vh] left-[1vw] top-[1vh]'>
          <button
            className='w-[27vw] h-[5vh] rounded-md border-[#707070] border-[0.5px]'
            onClick={() => setIsShow(!isShow)}
          > 
            <div className='flex flex-row gap-[1vw]'>
              <FaMapMarkerAlt className='text-[20px] text-[#465F85] ml-[6vw]' />
              <p>시/도 &gt; 시/군/구 &gt; 읍/면/도</p>
              <AiOutlineDown className='text-[18px] h-[3vh] ml-[4vw]' />
            </div>
          </button>
          <SeletBox />
          <input type='text' placeholder='검진기관명 입력' className='w-[27vw] h-[5vh] pl-[0.5vw] rounded-md border-[#707070] border-[0.5px]'/>
        </div>
        <div className='absolute w-[5vw] h-[5vh] left-[1vw] top-[6vh]'>
          
        </div>  
      </div>
      <div className='absolute w-[71.5vw] h-[51vh] left-[1vw] top-[15vh] rounded-md bg-[#FFFFFF]'>
      </div>
    </MainLayout>
  )
}

export default MedicalExamination