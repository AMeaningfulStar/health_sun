import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import VaccinationData from '../Vaccination/VaccinationData'; // 임시

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const Supplements = () => {
  return (
    <MainLayout>
      <Swiper
        className='w-[70vw] h-[68vh]'
        style={{'--swiper-navigation-size' : '35px', '--swiper-theme-color'  : 'black'}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {VaccinationData.map((data, idx) => {
          return(
            <SwiperSlide key={idx}>
              <img alt={data.name} src={data.img} className='absolute w-[53vw] h-[56vh] top-[6vh] left-[8vw] rounded-lg drop-shadow-lg' />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </MainLayout>
  )
}

export default Supplements