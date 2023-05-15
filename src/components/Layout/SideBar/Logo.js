import React from 'react';
import Lottie from 'react-lottie-player';

import LogoFile from '../../DesignFile/Logo.json';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className='flex flex-row items-center p-0 gap-[0.5vw] absolute left-[2vw]' to={'/home'}>
      <Lottie
        loop
        animationData={LogoFile}
        play
        className='w-[2vw]'
      />
      <p className='font-logo text-[#DB8888] not-italic text-lg'>Health sun</p>
    </Link>
  )
}

export default Logo