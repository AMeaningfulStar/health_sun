import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';

const SideBar = () => {
  return (
    <div className='absolute w-[15vw] h-[85vh] bg-white rounded-l-md border-r'>
      <div className='absolute w-[14vw] h-[80vh] top-[2vh]'>
        <Logo />
        <MenuList />
      </div>
    </div>
  )
}

export default SideBar