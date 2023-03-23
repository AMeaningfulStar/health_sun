import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SideBarData from './SideBarData';

import { FiArrowRight } from 'react-icons/fi';

const MenuList = () => {
  const location = useLocation();

  const Menu = ({ icon, menuName, path }) => {
    return(
      <Link className='block w-[100%] h-[6vh] bg-[#FFFFFF] rounded-r-full mb-1 hover:bg-[#F4F4F4]' to={path}>
        <div className='flex flex-row items-center p-0 gap-[1.5vh] absolute left-[1vw] text-[#A7A7A7] leading-[6vh]'>
          <div className='text-[18px] leading-[6vh]'>{ icon }</div>
          <div className='text-[0.875rem] font-semibold'>{ menuName }</div>
        </div>
      </Link>
    )
  }

  const MenuFocus = ({ icon, menuName }) => {
    return(
      <div className='block w-[100%] h-[6vh] bg-[#EEE6E2] rounded-r-full mb-1'>
        <div className='flex flex-row items-center p-0 gap-[1.5vh] absolute left-[1vw] text-[#DB8888] leading-[6vh]'>
          <div className='text-[18px] leading-[6vh]'>{ icon }</div>
          <div className='text-[0.875rem] font-semibold'>{ menuName }</div>
        </div>
        <div className='relative w-[35px] h-[35px] rounded-full left-[11.2vw] top-[0.6vh] pt-[7px] pl-[7px] bg-white'>
          <FiArrowRight className='text-[#DB8888] text-[20px]'/>
        </div>
      </div>
    )
  }

  return (
    <div className='absolute w-[100%] top-[6vh]'>
      {
        SideBarData.map((item) => {
          if(location.pathname === item.path){
            return(
              <MenuFocus icon={ item.icon } menuName={ item.menuName } />
            )
          }
          else {
            return(
              <Menu icon={ item.icon } menuName={ item.menuName } path={ item.path} />
            )
          }
        })
      }
    </div>
  )
}

export default MenuList