import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillCircleFill } from 'react-icons/bs';

const MedicineInfo = () => {
  return (
    <div className='bg-[#FBF7F4] w-[22vw] h-[27vh] rounded-lg absolute left-[67vw] top-[56.5vh]' >
      <div className='flex flex-row items-center gap-[12vw] absolute left-[1vw] top-[2vh] font-bold'>
        <p className='text-[16px]'>나의 복약 정보</p>
        <Link to={'/medicine'}>
          <p className='text-[15px] text-[#1D7D81]'>보기</p>
        </Link>
      </div>
      <div className='absolute h-[20vh] w-[20vw] top-[6vh] left-[1vw] overflow-scroll'>
        <div className='w-[100%] h-[7vh] bg-[#EEE6E2] rounded-md mb-1'>
          <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw]'>
            <BsFillCircleFill className='text-[#844685] text-[4.5vh] h-[7vh]' />
            <div>
              <p className='text-[14px]'>비염</p>
              <p className='text-[10px] text-[#708099]'>1시간 남았습니다</p>
            </div>
          </div>
        </div>
        <div className='w-[100%] h-[7vh] bg-[#EEE6E2] rounded-md mb-1'>
          <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw]'>
            <BsFillCircleFill className='text-[#84A0CD] text-[4.5vh] h-[7vh]' />
            <div>
              <p className='text-[14px]'>우울증</p>
              <p className='text-[10px] text-[#708099]'>1시간 20분 남았습니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicineInfo