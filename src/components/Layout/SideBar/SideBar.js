import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import { Link } from 'react-router-dom';
import LogoutImg from '../../DesignFile/logout.png';

const SideBar = () => {
  return (
    <div className='absolute w-[219.5px] h-[665.5px] bg-white rounded-l-md border-r'>
      <div className='absolute w-[205px] h-[626.5px] top-[15px]'>
        <Logo />
        <MenuList />
      </div>
      <div className='absolute w-[13vw] h-0 left-[1vw] top-[70vh] border-[0.5px] border-solid border-[#e5e7eb]' />
      <div className='absolute top-[74vh] left-[2vw]'>
        <Link to={'/'} className='flex flex-row items-center p-0 gap-[15px]'>
          <img src={LogoutImg} alt='logout' className='w-[3vw]' />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar