import React from 'react';
import { BiSearch } from 'react-icons/bi';

const GoodHospitalsInOurNeighborhood = () => {
  return (
    <div className='absolute w-[30vw] h-[58vh] left-[1vw] top-[8vh] bg-white rounded-md drop-shadow-lg z-10'>
      <div className='flex flex-row gap-[0.5vw] ml-[0.5vw] mt-[1vh]'>
        <input type='text' placeholder='병원명 입력' className='w-[25vw] h-[5vh] pl-[0.5vw] rounded-sm border-[#afafaf] border-[0.5px]' />
        <button className='w-[3.5vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[22px] text-[#FFFFFF]' />
        </button>
      </div>
      <div className='w-[30vw] h-[50vh] p-[1vh] flex flex-col'>
        <div>
          <div>
            <p className='text-[18px] font-semibold'>평가정보(필수)</p>
            <div className='flex flex-wrap gap-x-[0.5vw] gap-y-1 mt-[1vh]'>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                급성질환
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                만성질환
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                암질환
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                약제
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                요양병원
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                중환자실
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                난임시술
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                정신건강
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                기타
              </button>
            </div>
          </div>
          <div className='mt-[1.5vh]'>
            <p className='text-[15px] font-semibold text-[#7f7f7f]'>세부항목(필수)</p>
            <div className='flex flex-row gap-x-[0.5vw] mt-[1vh]'>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                관상동맥우회술
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                급성기뇌졸중
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                폐렴
              </button>
            </div>
          </div>
        </div>
        <div className='w-[29vw] h-0 my-[1.5vh] border-[0.5px] border-solid border-[#e5e7eb]' />
        <div>
          <p className='text-[18px] font-semibold'>등급설정</p>
        </div>
        <div className='flex flex-wrap gap-x-[0.7vw] mt-[1vh]'>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>전체</p>
          </div>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>1등급</p>
          </div>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>2등급</p>
          </div>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>3등급</p>
          </div>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>4등급</p>
          </div>
          <div className='flex flex-row gap-2 h-[3vh] w-[4vw]'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded mt-[2px]'
              defaultChecked={false}
            />
            <p className='text-[15px] font-medium'>5등급</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodHospitalsInOurNeighborhood