import React from 'react';
import { HiBell } from 'react-icons/hi';

const HeaderTop = () => {
  return (
    <div className='flex flex-row items-center p-0 gap-[25px] absolute right-[15px] top-[4px] h-[46px]'>
      <HiBell  className='w-[25px] h-[25px] text-[#DB8888]'/>
      <div className='bg-slate-500 rounded-full w-[30px] h-[30px]'></div>
    </div>
  )
}

export default HeaderTop