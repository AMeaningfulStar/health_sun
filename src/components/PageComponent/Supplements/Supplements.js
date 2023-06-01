import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layout/MainLayout';
import SupplementsData from './SupplementsData';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getDatabase, ref, update, onValue } from 'firebase/database';
import { useSelector } from 'react-redux';

SwiperCore.use([Navigation, Pagination]);

const Supplements = () => {
  const [swiper, setSwiper] = useState([]);
  const [swiperType, setSwiperType] = useState('childrenAndTeenagers');

  const MenuList = [
    {
      type: 'childrenAndTeenagers',
      title: '성장기 어린이 & 청소년'
    },
    {
      type: 'youngAdults',
      title: '20대 - 30대'
    },
    {
      type: 'middleAged',
      title: '40대 - 50대'
    },
    {
      type: 'seniors',
      title: '60대 이상'
    },
    {
      type: 'all',
      title: '전체 보기'
    },
  ]

  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (swiper.length === 0) {
      findSwiperData(swiperType);
    }
  }, [])

  const findSwiperData = (Type) => {
    const swiperData = SupplementsData.find(item => item.type === Type);

    if (swiperData) {
      const updatedSwiper = swiperData.data.map((item) => {
        onValue(ref(getDatabase(), `users/${user.uid}/supplements/${Type}/${item.id}`), (data) => {
          item.checked = data.val()
        })
        return item;
      })
      setSwiper(updatedSwiper)
      setSwiperType(Type)
    }
  }

  const handleCheckBox = (event, itemId) => {
    try {
      const updateData = {};

      updateData[itemId] = event.target.checked;

      update(ref(getDatabase(), `users/${user.uid}/supplements/${swiperType}`), updateData)

    } catch (error) {
      console.error('데이터베이스 업데이트 오류:', error);
    }
  }

  const DrawSwiper = ({ swiper }) => {
    return (
      <Swiper
        className='absolute w-[70vw] h-[61vh] top-[7vh]'
        style={{ '--swiper-navigation-size': '35px', '--swiper-theme-color': 'black' }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {
          swiper.map((item, idx) => {
            if (item.name) {
              return (
                <SwiperSlide key={idx}>
                  <div className='flex flex-row gap-2 absolute right-1 top-3 items-center'>
                    {item.checked ?
                      <input
                        type='checkbox'
                        className='w-[1.1vw]'
                        defaultChecked={true}
                        onChange={(event) => handleCheckBox(event, item.id)}
                      />
                      :
                      <input
                        type='checkbox'
                        className='w-[1.1vw]'
                        defaultChecked={false}
                        onChange={(event) => handleCheckBox(event, item.id)}
                      />
                    }
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
          })
        }
      </Swiper>
    )
  }

  const MenuBox = ({item}) => {
    if(swiperType === item.type) {
      return(
        <div
            className='w-[13.5vw] h-[5vh] rounded-md bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[14px]'
            onClick={() => findSwiperData(item.type)}
          >
            {item.title}
          </div>
      )
    }
    return(
      <div
          className='w-[13.5vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[14px]'
          onClick={() => findSwiperData(item.type)}
        >
          {item.title}
        </div>
    )
  }

  return (
    <MainLayout>
      <div className='absolute flex flex-row gap-x-[1vw] left-[1vw] top-[1.5vh] w-[71.5vw] z-10'>
        { MenuList.map((item, idx) => {
          return <MenuBox key={idx} item={item} />
        })}
      </div>
      <DrawSwiper swiper={swiper} />
    </MainLayout>
  )
}

export default Supplements