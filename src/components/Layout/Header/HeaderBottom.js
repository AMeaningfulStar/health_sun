import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const HeaderBottom = () => {
  return (
    <div>
      <div className='absolute w-auto h-[6vh] top-[8vh] left-[0.5vw]'>
        <span className='text-[#DB8888] font-semibold text-sm'>오늘의 한 마디</span><br/>
        <span className='text-[#8C8C8C] font-nomal text-xs'>이걸 기억하겠다고 약속해줘. 넌 네가 믿는 것보다 더 용감하고, 보기보다 강하고, 네 생각보다 더 똑똑하다는 걸</span>
      </div>
      <button
        type='button'
        className='absolute h-[5vh] w-[9vw] right-[1vw] top-[9vh] bg-[#F2F2F2] rounded-md hover:bg-[#E3E3E3]'
      >
        <div className='flex flex-row items-center gap-[0.6vw] absolute w-[7.7vw] h-[2vh] left-[1vw] top-[1.7vh]'>
          <a className='text-[#DB8888] font-normal text-sm flex items-center order-0 flex-grow-0'>나의 프로필</a>
          <IoIosArrowDown className='text-[#5F647E] h-[4vh] flex order-1 flex-grow-0'/>
        </div>
      </button>
    </div>
  )
}

export default HeaderBottom