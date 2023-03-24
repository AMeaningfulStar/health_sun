import React from 'react';
import { GiHealthNormal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className='flex flex-row items-center p-0 gap-[1vw] absolute left-[2vw]' to={'/'}>
      <GiHealthNormal className='text-[#DB8888] text-lg'/>
      <p className='font-logo text-[#DB8888] not-italic text-lg'>Health sun</p>
    </Link>
  )
}

export default Logo