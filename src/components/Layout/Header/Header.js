import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  return (
    <div className='absolute w-[1102.5px] h-[117.5px] left-[219.5px]'>
      <HeaderTop />
      {/* header 경계선 */}
      <div className='absolute w-[1102.5px] h-0 top-[55px] border-[0.5px] border-solid border-[#e5e7eb]'/>
      <HeaderBottom />
    </div>
  )
}

export default Header