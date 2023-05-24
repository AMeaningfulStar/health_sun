import React, { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import MedicalExaminationSearchBox from './MedicalExaminationSearchBox';
import MedicalExaminationMapModal from './MedicalExaminationMapModal';

import { FaMapMarkerAlt } from 'react-icons/fa';

const MedicalExamination = () => {
  const HospitalInfo = () => {
    const [ isShowModal, setIsShowModal ] = useState(false);

    return (
      <div className='w-[100%] h-[11.5vh] bg-[#EEE6E2] rounded-md mb-1'>
        <div className='flex flex-row gap-x-[1vw] w-[100%] h-[4.5vh]'>
          <p className='leading-[5vh] ml-[1vw]'>1</p>
          <p className='leading-[5vh] w-[61vw] font-semibold'>병원 이름1</p>
          <button className='h-[5vh]' onClick={() => setIsShowModal(!isShowModal)}>
            <div className='w-[5vw] h-[3vh] flex flex-row gap-x-1 bg-[#DB8888] rounded-sm items-center justify-center'>
              <FaMapMarkerAlt className='text-[14px] text-[#f9e4e4]' />
              <p className='font-semibold text-[13px] mt-[2px] text-[#f9e4e4]'>지도보기</p>
              <MedicalExaminationMapModal isShow={ isShowModal } setIsShow={ setIsShowModal }/>
            </div>
          </button>
        </div>
        <div className='w-[68.5vw] h-[6.3vh] ml-[1vw] rounded-sm bg-[#FFFFFF]'>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[3vh]'>
            <p className='font-semibold text-[14px] ml-[0.5vw] leading-[4vh]'>[영업일]</p>
            <p className='font-medium text-[13px] leading-[4vh]'>월, 화, 수, 목, 금, 토</p>
          </div>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[3vh]'>
            <p className='font-semibold text-[14px] ml-[0.5vw] leading-[4vh]'>[검진항목]</p>
            <p className='font-medium text-[13px] leading-[4vh]'>일반</p>
          </div>
        </div>
      </div>
    )

  }

  return (
    <MainLayout>
      <MedicalExaminationSearchBox />
      <div className='absolute w-[71.5vw] h-[55vh] left-[1vw] top-[11vh] p-[1vh] rounded-md bg-[#FFFFFF] overflow-scroll'>
        <HospitalInfo />
        <HospitalInfo />
        <HospitalInfo />
        <HospitalInfo />
      </div>
    </MainLayout>
  )
}

export default MedicalExamination