import React, { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import MedicalExaminationSearchBox from './MedicalExaminationSearchBox';

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
      <MedicalExaminationSearchBox />
      <div className='absolute w-[71.5vw] h-[52vh] left-[1vw] top-[14vh] p-[1vh] rounded-md bg-[#FFFFFF]'>
        <div className='w-[100%] h-[7vh] bg-[#EEE6E2] rounded-md mb-1'>
          
        </div>
      </div>
    </MainLayout>
  )
}

export default MedicalExamination