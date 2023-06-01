import React, { useState } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import SiDoData from './MedicalExaminationSearchData/SiDoData';
import SiGunGuData from './MedicalExaminationSearchData/SiGunGuData'

const MedicalExaminationSearchBox = ({ getRegnHmcList, setSiDoCd, setSiGunGuCd, siDoCd }) => {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [siDo, setSiDo] = useState('');
  const [siGunGu, setSiGunGu] = useState('');
  const [siGunGuList, setSiGunGuList] = useState([]);

  const handleSiDoClick = (siDoData) => {
    setSiDoCd(siDoData.code);
    setSiDo(siDoData.name);

    const siGunGuFindData = SiGunGuData.find((item) => item.sidoCode === siDoData.code).data;

    setSiGunGuList(siGunGuFindData);
  }

  const handleSiGunGuClick = (siGunGuData) => {
    setSiGunGu(siGunGuData.name);
    setSiGunGuCd(siGunGuData.code);
    getRegnHmcList(siDoCd, siGunGuData.code);
    setIsShowSelect(!isShowSelect);
  }

  const SeletBox = () => {
    if (isShowSelect) {
      return (
        <div className='absolute w-[25vw] h-[30vh] top-[6vh] z-10 rounded-md border-[1px] bg-[#FFFFFF] flex flex-row'>
          <div className='w-[49.5%] h-auto mt-1 overflow-scroll border-r-2 border-dotted'>
            {SiDoData.map((item, idx) => {
              return (
                <button key={idx} className='w-[100%] h-[4vh] hover:bg-[#F2F2F2]' onClick={() => handleSiDoClick(item)}>
                  <p className='leading-[4vh] text-center font-medium'>{item.name}</p>
                </button>
              )
            })}
          </div>
          <div className='w-[50.5%] h-auto mt-1 overflow-scroll'>
            {siDoCd ?
              siGunGuList.map((item, idx) => {
                return (
                  <button key={idx} className='w-[100%] h-[4vh] hover:bg-[#F2F2F2]' onClick={() => handleSiGunGuClick(item)}>
                    <p className='leading-[4vh] text-center font-medium'>{item.name}</p>
                  </button>
                )
              })
              : <p className='h-[4vh] leading-[4vh] text-center font-medium'>시/도를 선택해주세요</p>
            }
          </div>
        </div>
      )
    }
  }

  return (
    <div className='absolute w-[71.5vw] h-[7.5vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
      <div className='flex flex-row gap-[0.5vw] absolute h-[5vh] left-[1vw] top-[1vh]'>
        <button
          className='w-[25vw] h-[5vh] rounded-sm border-[#707070] border-[0.5px]'
          onClick={() => setIsShowSelect(!isShowSelect)}
        >
          <div className='flex flex-row gap-[1.5vw]'>
            <FaMapMarkerAlt className='text-[20px] text-[#465F85] ml-[2vw]' />
            <div className='flex flex-row gap-2 w-[15vw] justify-center'>
              {siDo ? <p className='font-medium'>{siDo}</p> : <p className='font-medium'>시/도</p>}
              <p className='font-medium'>&gt;</p>
              {siGunGu ? <p className='font-medium'>{siGunGu}</p> : <p className='font-medium'>시/군/구</p>}
            </div>
            <AiOutlineDown className='text-[18px] h-[3vh] ml-[1vw]' />
          </div>
        </button>
        <SeletBox />
        <input type='text' placeholder='검진기관명 입력' className='w-[38vw] h-[5vh] pl-[0.5vw] rounded-sm border-[#707070] border-[0.5px]' />
        <button className='w-[6vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[22px] text-[#FFFFFF]' />
        </button>
      </div>
    </div>
  )
};

export default MedicalExaminationSearchBox;