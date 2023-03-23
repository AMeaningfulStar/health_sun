import React from 'react';

const AuthenticationLayout = ({ children }) => {
  return (
    <div>
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[-47.43px] top-[-186px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[460.57px] top-[-111px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[953.57px] top-[-144px]' />
      <div className='absolute w-[230px] h-[1628.49px] bg-transparent rotate-12 left-[1413.57px] top-[-123px]' />
      <div className='absolute w-[90vw] h-[85vh] left-[5vw] top-[8vh] bg-white rounded-md'>
        { children }
      </div>
    </div>
  )
}

export default AuthenticationLayout