import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  return (
    <div className='absolute w-[75vw] h-[15vh] left-[15vw]'>
      <HeaderTop />
      {/* header 경계선 */}
      <div className='absolute w-[75vw] h-0 top-[7vh] border-[0.5px] border-solid border-[#e5e7eb]'/>
      <HeaderBottom />
    </div>
  )
}

export default Header