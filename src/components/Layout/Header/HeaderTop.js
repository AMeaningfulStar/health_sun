import React from 'react';
import { HiBell } from 'react-icons/hi';

import { useSelector } from 'react-redux';

const HeaderTop = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className='flex flex-row items-center p-0 gap-[25px] absolute right-[15px] top-[4px] h-[46px]'>
      <HiBell  className='w-[25px] h-[25px] text-[#DB8888]'/>
      <img src={user && user.photoURL} className='rounded-full w-[30px] h-[30px]'/>
    </div>
  )
}

export default HeaderTop