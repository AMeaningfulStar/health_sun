import React from 'react';

import { TiHome } from 'react-icons/ti';
import { MdInsertChart, MdLocalHospital } from 'react-icons/md';
import { BiInjection } from 'react-icons/bi';
import { RiCapsuleFill } from 'react-icons/ri';
import { TbHealthRecognition } from 'react-icons/tb';

const SideBarData = [
  {
    menuName: '홈',
    icon: <TiHome />,
    path: '/home'
  },
  {
    menuName: '건강검진 기관',
    icon: <MdInsertChart />,
    path: '/medicalExamination'
  },
  {
    menuName: '예방 접종',
    icon: <BiInjection />,
    path: '/vaccination'
  },
  {
    menuName: '영양제',
    icon: <TbHealthRecognition />,
    path: '/supplements'
  },
  {
    menuName: '복약 정보',
    icon: <RiCapsuleFill />,
    path: '/medicine'
  },
  {
    menuName: '병원/약국 찾기',
    icon: <MdLocalHospital />,
    path: '/position'
  }
]

export default SideBarData