import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import LogoutImg from '../../DesignFile/logout.png';

import { auth } from '../../../firebase';
import { signOut } from "firebase/auth";

const SideBar = () => {
  // 로그아웃 이벤트 함수
  const handleLogout = () => {
    signOut(auth).then(() => {

    }).catch((error) => {

    })
  }

  return (
    <div className='absolute w-[15vw] h-[85vh] bg-white rounded-l-md border-r'>
      <div className='absolute w-[14vw] h-[88vh] top-[2vh]'>
        <Logo />
        <MenuList />
      </div>
      <div className='absolute w-[13vw] h-0 left-[1vw] top-[70vh] border-[0.5px] border-solid border-[#e5e7eb]' />
      <div className='absolute top-[74vh] left-[2vw]'>
        <button onClick={handleLogout} className='flex flex-row items-center p-0 gap-[15px]'>
          <img src={LogoutImg} alt='logout' className='w-[3vw]' />
          <p>Logout</p>
        </button>
      </div>
    </div>
  )
}

export default SideBar