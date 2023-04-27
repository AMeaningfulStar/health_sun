import React, { useState } from 'react';
import MedicalExaminationModal from './MedicalExaminationModal';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const MedicalExaminationSearchBox = () => {
  const [ isShowSelect, setIsShowSelect ] = useState(false); // 시도/시군군/음면도 검색을 위한 select 박스 노출 여부 변수
  const [ isShowModal, setIsShowModal ] = useState(false); // 상세 검색 모달창 노출 여부 변수

  const SeletBox = () => {
    if(isShowSelect){
      return(
        <div className='absolute w-[32vw] h-[30vh] top-[6vh] z-10 rounded-md border-[1px] bg-[#FFFFFF]'>
          
        </div>
      )
    }
  }

  return (
    <div className='absolute w-[71.5vw] h-[11vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
      <div className='flex flex-row gap-[0.5vw] absolute h-[5vh] left-[1vw] top-[1vh]'>
        <button
          className='w-[32vw] h-[5vh] rounded-sm border-[#707070] border-[0.5px]'
          onClick={() => setIsShowSelect(!isShowSelect)}
        > 
          <div className='flex flex-row gap-[6vw]'>
            <FaMapMarkerAlt className='text-[20px] text-[#465F85] ml-[2vw]' />
            <p>시/도 &gt; 시/군/구 &gt; 읍/면/도</p>
            <AiOutlineDown className='text-[18px] h-[3vh] ml-[2vw]' />
          </div>
        </button>
        <SeletBox />
        <input type='text' placeholder='검진기관명 입력' className='w-[31.5vw] h-[5vh] pl-[0.5vw] rounded-sm border-[#707070] border-[0.5px]'/>
        <button className='w-[5vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[22px] text-[#FFFFFF]'/>
        </button>
      </div>
      <div className='absolute w-[7vw] left-[1vw] top-[7vh]'>
        <button className='text-[15px] text-[#969595] font-semibold hover:text-[#707070]' onClick={() => setIsShowModal(!isShowModal)}>[상세검색하기]</button>
        <MedicalExaminationModal isShow={ isShowModal } setIsShow={ setIsShowModal }/>
      </div>  
    </div>
  )
}

export default MedicalExaminationSearchBox