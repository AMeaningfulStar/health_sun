import React from 'react';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';

const MainLayout = ({ children, isMain }) => {
  if(isMain) {
    return(
      <div className='relative'>
        <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[-47.43px] top-[-186px]' />
        <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[460.57px] top-[-111px]' />
        <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[953.57px] top-[-144px]' />
        <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[1413.57px] top-[-123px]' />
        <div className='absolute w-[1323px] h-[665.5px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[9%] bg-white rounded-md'>
          <Header />
          <SideBar />
          <div className='w-[1323px] h-[665.5px] pt-[117.5px] pl-[219.5px]'>
            { children }
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='relative'>
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[-47.43px] top-[-186px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[460.57px] top-[-111px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[953.57px] top-[-144px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[1413.57px] top-[-123px]' />
      <div className='absolute w-[1323px] h-[665.5px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[9%] bg-white rounded-md'>
        <Header />
        <SideBar />
        <div className='w-[1323px] h-[665.5px] pt-[117.5px] pl-[219.5px]'>
          <div className='w-[73.5vw] h-[68vh] rounded-lg absolute left-[15.5vw] top-[15.5vh] bg-[#FBF7F4]'>
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout