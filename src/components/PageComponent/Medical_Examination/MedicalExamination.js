import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import MedicalExaminationSearchBox from './MedicalExaminationSearchBox';

const MedicalExamination = () => {
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