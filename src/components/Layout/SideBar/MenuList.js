import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SideBarData from './SideBarData';

import { FiArrowRight } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';

const MenuList = () => {
  const location = useLocation();

  const Menu = ({ icon, menuName, path }) => {
    return(
      <Link className='block w-[100%] h-[47px] bg-[#FFFFFF] rounded-r-full mb-1 hover:bg-[#F4F4F4]' to={path}>
        <div className='flex flex-row items-center p-0 gap-[15px] absolute left-[20px] text-[#A7A7A7] leading-[47px]'>
          <div className='text-[18px]'>{ icon }</div>
          <div className='text-[0.9rem] font-semibold'>{ menuName }</div>
        </div>
      </Link>
    )
  }

  const MenuFocus = ({ icon, menuName }) => {
    return(
      <div className='block w-[100%] h-[47px] bg-[#EEE6E2] rounded-r-full mb-1'>
        <div className='flex flex-row items-center p-0 gap-[15px] absolute left-[20px] text-[#DB8888] leading-[47px]'>
          <div className='text-[18px]'>{ icon }</div>
          <div className='text-[0.9rem] font-semibold leading-[47px]'>{ menuName }</div>
        </div>
        <BsFillCircleFill className='text-white text-[37.58px] left-[163px] top-[4.7px] relative' />
        <FiArrowRight className='text-[#DB8888] text-[19.57px] left-[173px] top-[-24px] relative' />
      </div>
    )
  }

  return (
    <div className='absolute w-[100%] top-[45px]'>
      {
        SideBarData.map((item, idx) => {
          if(location.pathname === item.path){
            return(
              <MenuFocus key={idx} icon={ item.icon } menuName={ item.menuName } />
            )
          }
          else {
            return(
              <Menu key={idx} icon={ item.icon } menuName={ item.menuName } path={ item.path} />
            )
          }
        })
      }
    </div>
  )
}

export default MenuList