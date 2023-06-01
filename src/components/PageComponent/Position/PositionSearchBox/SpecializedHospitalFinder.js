import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SpecializedHospitalFinder = () => {
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
            <p className='text-[18px] font-semibold'>유형(필수)</p>
            <div className='flex flex-wrap gap-x-[0.5vw] gap-y-1 mt-[1vh]'>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                전체선택
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                관절
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                뇌혈관
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                대장항문
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                수지접합
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                심장
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                알코올
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                유방
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                척추
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                화상
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                산부인과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                소아청소년과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                안과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                외과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                이비인후과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                신경과
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                주산기(모자)
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                한방중풍질환
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                한방척추질환
              </button>
              <button className='w-[9.3vw] h-[5.5vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                한방부인과
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecializedHospitalFinder