import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const VaccinationAdvise = () => {

  return (
    <div className='bg-[#FBF7F4] w-[50vw] h-[27vh] rounded-lg absolute left-[16vw] top-[56.5vh]'>
      <div className='absolute left-[1.5vw] top-[2vh]'>
        <p className='text-[16px] font-bold'>예방 접종 추천</p>
      </div>
      <div className='absolute w-[48vw] h-[20vh] top-[5.5vh] left-[1vw]'>
        <Swiper
          className='w-[100%] h-[100%] '
          style={{'--swiper-navigation-size' : '25px', '--swiper-theme-color'  : 'black'}}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='absolute w-[42vw] h-[20vh] left-[3vw] bg-[#FFFFFF] rounded-lg border-[1px] border-[#EAEAEA]'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='absolute w-[42vw] h-[20vh] left-[3vw] bg-[#FFFFFF] rounded-lg border-[1px] border-[#EAEAEA]'>
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='absolute w-[42vw] h-[20vh] left-[3vw] bg-[#FFFFFF] rounded-lg border-[1px] border-[#EAEAEA]'>
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='absolute w-[42vw] h-[20vh] left-[3vw] bg-[#FFFFFF] rounded-lg border-[1px] border-[#EAEAEA]'>
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='absolute w-[42vw] h-[20vh] left-[3vw] bg-[#FFFFFF] rounded-lg border-[1px] border-[#EAEAEA]'>
              Slide 5
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default VaccinationAdvise