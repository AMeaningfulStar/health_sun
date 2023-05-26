import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layout/MainLayout';
import SupplementsData from './SupplementsData';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getDatabase, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';

SwiperCore.use([Navigation, Pagination]);

const Supplements = () => {
  const [swiper, setSwiper] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (swiper) {
      findSwiperData('childrenAndTeenagers');
    }
  }, [])

  const findSwiperData = (swiperType) => {
    const swiperData = SupplementsData.find(item => item.type === swiperType)

    if (swiperData) {
      setSwiper(swiperData.data)
    }
  }

  const DrawSwiper = (item, idx) => {
    const handleCheckBox = (event) => {
      try{
        if(event.target.checked){
          set(ref(getDatabase(), `users/${user.uid}/supplements`), item.name)
        }else{

        }
      }
      catch(error){
        console.error();
      }
    }

    if (item.name) {
      return (
        <SwiperSlide key={idx}>
          <div className='flex flex-row gap-2 absolute right-1 top-3 items-center'>
            <input
              type='checkbox'
              className='w-[1.1vw]'
              onChange={handleCheckBox}
            />
            <p className=''>
              {item.name} 를(을) 먹고 있어요
            </p>
          </div>
          <img alt={item.name} src={item.img} className='absolute w-[53vw] h-[50vh] top-[6vh] left-[8vw] rounded-lg drop-shadow-lg' />
        </SwiperSlide>
      )
    }

    return (
      <SwiperSlide key={idx}>
        <img alt={item.name} src={item.img} className='absolute w-[53vw] h-[50vh] top-[6vh] left-[8vw] rounded-lg drop-shadow-lg' />
      </SwiperSlide>
    )
  }

return (
  <MainLayout>
    <div className='absolute flex flex-row gap-x-[1vw] left-[1vw] top-[1.5vh] w-[71.5vw] z-10'>
      <div
        className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[14px]'
        onClick={() => findSwiperData('childrenAndTeenagers')}
      >
        성장기 어린이 & 청소년
      </div>
      <div
        className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]'
        onClick={() => findSwiperData('youngAdults')}
      >
        20대 - 30대
      </div>
      <div
        className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]'
        onClick={() => findSwiperData('middleAged')}
      >
        40대 - 50대
      </div>
      <div
        className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]'
        onClick={() => findSwiperData('seniors')}
      >
        60대 이상
      </div>
      <div className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]'
        onClick={() => findSwiperData('all')}
      >
        전체 보기
      </div>
    </div>
    <Swiper
      className='absolute w-[70vw] h-[61vh] top-[7vh]'
      style={{ '--swiper-navigation-size': '35px', '--swiper-theme-color': 'black' }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {swiper.map((item, idx) => {
        return DrawSwiper(item, idx)
      })}
    </Swiper>
  </MainLayout>
)
}

export default Supplements