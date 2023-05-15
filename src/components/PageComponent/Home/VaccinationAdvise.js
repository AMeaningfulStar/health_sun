import React from 'react';
import VaccinationAdviseData from './VaccinationAdviseData';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const VaccinationAdvise = () => {

  return (
    <div className='bg-[#FBF7F4] w-[51vw] h-[27vh] rounded-lg absolute left-[15.5vw] top-[56.5vh]'>
      <div className='absolute left-[1vw] top-[2vh]'>
        <p className='text-[16px] font-bold'>예방 접종 추천</p>
      </div>
      <div className='absolute w-[49vw] h-[23vh] top-[5.5vh] left-[1vw]'>
        <Swiper
          className='w-[100%] h-[100%] '
          style={{'--swiper-navigation-size' : '25px', '--swiper-theme-color'  : 'black'}}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={ true }
        >
          {
            VaccinationAdviseData.map((data, idx) => {
              return(
                <SwiperSlide key={idx}>
                  <img alt={data.name} src={data.img} className='absolute w-[43vw] h-[19vh] left-[3vw] rounded-lg drop-shadow' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default VaccinationAdvise