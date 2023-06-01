import React from 'react';
import ReactModal from 'react-modal';
import KakaoMap from '../../Kakao/KakaoMap';

import { AiOutlineClose } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsCalendar3 } from 'react-icons/bs';
import Hospital from '../../DesignFile/Hospital.png'

const MedicalExaminationMapModal = ({ isShow, setIsShow, hospital}) => {
  return (
    <ReactModal
      isOpen={isShow}
      onRequestClose={() => setIsShow(false)}
      className='absolute w-[35vw] h-[80vh] left-[34vw] top-[10vh] rounded-md bg-[#EEE6E2]'
    >
      <div className='absolute left-[1.5vw] top-[2vh] flex flex-row gap-[26vw] items-center'>
        <p className='text-[20px] text-[#707070] font-bold'>지도보기</p>
        <button>
          <AiOutlineClose className='text-[23px] text-[#707070]' onClick={() => setIsShow(false)} />
        </button>
      </div>
      <div className='absolute w-[33vw] h-[71.5vh] left-[1vw] top-[7vh] rounded-md bg-[#FFFFFF] flex flex-col'>
        <div className='w-[33vw] h-[46vh] rounded-sm'>
        <KakaoMap cxVl={hospital.cxVl} cyVl={hospital.cyVl} imgData={Hospital}/>
        </div>
        <div className='w-[31vw] ml-[1vw] mt-[2.5vh] flex flex-col'>
          {/* 병원 이름 */}
          <div>
            <p className='font-bold text-[22px]'>{ hospital.hmcNm }</p>
          </div>
          {/* 병원 주소 */}
          <div>
            <p className='text-[12px] text-[#707070]'>{ hospital.locAddr }</p>
          </div>
          {/* 병원 전화번호 */}
          <div className='mt-3 flex flex-row gap-3'>
            <BiPhoneCall className='text-[#676666] text-[20px]'/>
            <p className='text-[14px] font-medium text-[#676666]'>{ hospital.hmcTelNo }</p>
          </div>
          {/* 검진일 */}
          <div className='mt-3 flex flex-row gap-3'>
            <BsCalendar3 className='text-[#676666] text-[19px]'/>
            <p className='text-[14px] font-medium text-[#676666]'>{hospital.holidayYn === 'Y' ? '월 화 수 목 금 토' : '월 화 수 목 금 토 일'}</p>
          </div>
          {/* 검진 항목 */}
          <div className='mt-3 flex flex-row gap-3'>
            <HiOutlineClipboardList className='text-[#676666] text-[22px]' />
            <p className='text-[14px] font-medium text-[#676666]'>
              {hospital.bcExmdChrgTypeCd ? '유방암검진, ' : ''}
              {hospital.ccExmdChrgTypeCd ? '대장암검진, ' : ''}
              {hospital.cvxcaExmdChrgTypeCd ? '자궁경부암검진, ' : ''}
              {hospital.grenChrgTypeCd ? '일반검진, ' : ''}
              {hospital.ichkChrgTypeCd ? '영유아검진, ' : ''}
              {hospital.lvcaExmdChrgTypeCd ? '간암검진, ' : ''}
              {hospital.mchkChrgTypeCd ? '구강검진' : ''}
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default MedicalExaminationMapModal