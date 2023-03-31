import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';

const SideBar = () => {
  return (
    <div className='absolute w-[219.5px] h-[665.5px] bg-white rounded-l-md border-r'>
      <div className='absolute w-[205px] h-[626.5px] top-[15px]'>
        <Logo />
        <MenuList />
      </div>
    </div>
  )
}

export default SideBar