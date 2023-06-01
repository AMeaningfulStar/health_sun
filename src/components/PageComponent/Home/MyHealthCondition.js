import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { BsFillCircleFill } from 'react-icons/bs';
import { TbHeartPlus } from 'react-icons/tb';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { getDatabase, ref, onValue } from 'firebase/database';
import { useSelector } from 'react-redux';

import SupplementsData from '../Supplements/SupplementsData';

const MyHealthCondition = ({ userAge, age }) => {
  const [supplementsList, setSupplementsList] = useState([]);
  const [status, setStatus] = useState(false);
  const YEAR = new Date().getFullYear();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    onValue(ref(getDatabase(), `users/${user.uid}`), (data) => {
      if (data.val() !== null) {
        if ((YEAR - Number(data.val().age)) % 2 !== YEAR % 2) {
          setStatus(true);
        };
      }
    }
    )
  }, [])

  // 영양제 추천
  const SupplementsAdvise = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
      onValue(ref(getDatabase(), `users/${user.uid}/supplements/${userAge}`), (data) => {
        Object.keys(data.val()).forEach((item) => {
          if (!data.val()[item]) {
            const supplement = SupplementsData.find(item => item.type === userAge).data.find(element => element.id === item);

            if (!supplementsList.includes(supplement)) {
              setSupplementsList([...supplementsList, supplement])
            }
          }
        })
      })
    }, [user.uid, userAge])

    return (
      <div className=' h-auto'>
        <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
          <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
            <BsFillCircleFill className='text-[4.5vh]' style={{ color: `${'#' + Math.floor(Math.random() * 0xffffff).toString(16)}` }} />
            <div className='w-[40vw]'>
              <p className='text-[13px]'>나에게 필요한 영양제</p>
              <p className='text-[10px] text-[#AEAEAE]'>{age}대인 {user.displayName}님께 필요한 영양제입니다</p>
            </div>
            <button onClick={() => setIsShow(!isShow)}>
              {isShow ?
                <AiOutlineUp className='text-[16px] text-[#949494]' /> : <AiOutlineDown className='text-[16px] text-[#949494]' />
              }
            </button>
          </div>
        </div>
        {isShow &&
          supplementsList.map((item, idx) => {
            return (
              <div key={idx} className='w-[100%] h-[4vh] rounded-sm mb-1 bg-[#EEE6E2] flex flex-row gap-2 items-center'>
                <TbHeartPlus className='text-[#708099] text-[14px] ml-[1vw]' />
                <p className='text-[11px] text-[#484f5b]'>{item.name} :</p>
                <p className='text-[10px] text-[#708099]'>{item.info}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  // 건강 검진
  const HealthCheckupStatus = () => {
    if (status) {
      return (
        <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
          <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
            <BsFillCircleFill className='text-[4.5vh]' style={{ color: `${'#' + Math.floor(Math.random() * 0xffffff).toString(16)}` }} />
            <div className='w-[40vw]'>
              <p className='text-[13px]'>{YEAR}년 {user.displayName}님은 건강검진 대상자입니다</p>
              <p className='text-[10px] text-[#AEAEAE]'>가까운 건강건진 기관을 찾아보세요</p>
            </div>
            <Link to={'/medicalExamination'}>
              <p className='text-[12px] text-[#AEAEAE] font-bold'>보기</p>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
        <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
          <BsFillCircleFill className='text-[4.5vh]' style={{ color: `${'#' + Math.floor(Math.random() * 0xffffff).toString(16)}` }} />
          <div className='w-[40vw]'>
            <p className='text-[13px]'>{user.displayName}님은 건강검진 대상자가 아닙니다</p>
            <p className='text-[10px] text-[#AEAEAE]'>{YEAR + 1}년에 건강건진 대상자입니다</p>
          </div>
          <Link to={'/medicalExamination'}>
            <p className='text-[12px] text-[#AEAEAE] font-bold'>보기</p>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#FBF7F4] w-[50vw] h-[40vh] rounded-lg absolute left-[16vw] top-[15.5vh]' >
      <div className='absolute left-[1.5vw] top-[2vh]'>
        <p className='text-[16px] font-bold'>나에게 필요한 건강정보</p>
      </div>
      <div className='absolute h-[32vh] w-[48vw] top-[6vh] left-[1vw] overflow-scroll'>
        {/* 영양제 정보 */}
        <SupplementsAdvise />
        {/* 건강검진 */}
        <HealthCheckupStatus />
        {/* 예방 접종 */}
        <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
          <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
            <BsFillCircleFill className='text-[4.5vh]' style={{ color: `${'#' + Math.floor(Math.random() * 0xffffff).toString(16)}` }} />
            <div className='w-[40vw]'>
              <p className='text-[13px]'>이런 예방 접종이 있는걸 아시나요?</p>
              <p className='text-[10px] text-[#AEAEAE]'>예방 접종 정보를 확인해보세요</p>
            </div>
            <Link to={'/vaccination'}>
              <p className='text-[12px] text-[#AEAEAE] font-bold'>보기</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHealthCondition