import React from 'react';
import { GiHealthNormal } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className='flex flex-row items-center p-0 gap-[1vw] absolute left-[2vw]'>
      <GiHealthNormal className='text-[#DB8888] text-lg'/>
      <p className='font-logo text-[#DB8888] not-italic text-lg'>Health sun</p>
    </div>
  )
}

export default Logo