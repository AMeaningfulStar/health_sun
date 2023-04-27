import React from 'react';
import ReactModal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';

const MedicalExaminationModal = ({ isShow, setIsShow }) => {
  return (
    <ReactModal
      isOpen={isShow}
      onRequestClose={() => setIsShow(false)}
      className='absolute w-[35vw] h-[80vh] left-[34vw] top-[10vh] rounded-md bg-[#EEE6E2]'
    >
      <div className='absolute left-[1.5vw] top-[2vh] flex flex-row gap-[23.5vw] items-center'>
        <p className='text-[20px] text-[#707070] font-bold'>상세검색하기</p>
        <button>
          <AiOutlineClose className='text-[23px] text-[#707070]' onClick={() => setIsShow(false)} />
        </button>
      </div>
      <div className='absolute w-[33vw] h-[71vh] left-[1vw] top-[7vh] rounded-md bg-[#FFFFFF] flex flex-col'>
        
      </div>
    </ReactModal>
  )
}

export default MedicalExaminationModal