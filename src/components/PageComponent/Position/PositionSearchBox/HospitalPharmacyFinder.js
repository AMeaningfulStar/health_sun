import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const HospitalPharmacyFinder = ({handleCategoryChange, setIsShow}) => {
  const [checkedKind, setClickedKind] = useState('');

  const handleSearchBtn = () => {
    handleCategoryChange(checkedKind);
    setIsShow(false);
  }

  return (
    <div className='absolute w-[30vw] h-[58vh] left-[1vw] top-[8vh] bg-white rounded-md drop-shadow-lg z-10'>
      <div className='flex flex-row gap-[0.5vw] ml-[0.5vw] mt-[1vh]'>
        <input type='text' placeholder='병원명 및 약국명 입력' className='w-[25vw] h-[5vh] pl-[0.5vw] rounded-sm border-[#afafaf] border-[0.5px]' />
        <button className='w-[3.5vw] bg-[#DB8888] rounded-sm' onClick={() => handleSearchBtn()}>
          <BiSearch className='w-[100%] text-[22px] text-[#FFFFFF]' />
        </button>
      </div>
      <div className='w-[30vw] h-[50vh] p-[1vh] flex flex-col overflow-scroll'>
        <div>
          <div>
            <p className='text-[18px] font-semibold'>종류(필수)</p>
            <div className='flex flex-wrap gap-x-[0.5vw] gap-y-1 mt-[1vh]'>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                상급종합병원
              </button>
              {checkedKind === '종합병원' ?
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  종합병원
                </button>
                :
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setClickedKind('종합병원')}>
                  종합병원
                </button>
              }
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                요양병원
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                정신병원
              </button>
              {checkedKind === '병원' ?
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  병원
                </button>
                :
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setClickedKind('병원')}>
                  병원
                </button>
              }
              {checkedKind === '의원' ?
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  의원
                </button>
                :
                <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setClickedKind('의원')}>
                  의원
                </button>
              }
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                치과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                한방
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                보건기관
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                조산원
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                약국
              </button>
            </div>
          </div>
          <div className='mt-[1.5vh]'>
            <p className='text-[15px] font-semibold text-[#7f7f7f]'>진료과목(선택)</p>
            <div className='flex flex-wrap gap-x-[0.5vw] gap-y-1 mt-[1vh]'>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                전체선택
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                가정의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                결핵과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                내과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                마취통증의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                방사선종양학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                병리과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                비뇨의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                산부인과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                성형외과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                소아청소년과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                신경과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                신경외과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                안과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                영상의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                예방의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                외과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                응급의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                이비인후과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                재활의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                정신건강의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                정형외과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                직업환경의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                진단검사의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                피부과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                핵의학과
              </button>
              <button className='w-[9.3vw] h-[4vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                흉부외과
              </button>
            </div>
          </div>
        </div>
        <div className='w-[29vw] h-0 my-[1.5vh] border-[0.5px] border-solid border-[#e5e7eb]' />
        <div>
          <p className='text-[18px] font-semibold'>보유장비</p>
          <div className='flex flex-wrap gap-x-[0.5vw] gap-y-1 mt-[1vh]'>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                CT
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                MRI
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                유방 촬영 장치
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                PET
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                종양치료기<br/>(Gamma Knife)
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                종양치료기<br/>(Cyber Knife)
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                종양치료기<br/>(양성자 치료기)
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                체외 충격파<br/>쇄석기
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                혈액투석을 위한<br/>인공신장기
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                골밀도 검사기
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                초음파<br/>영상 진단기
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                콘빔CT
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                인공호흡기
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                ECMO
              </button>
              <button className='w-[9.3vw] h-[6vh] rounded-sm text-center border-[0.5px] border-[#e1d7d1] hover:border-[#DB8888] hover:border-[1px]'>
                일반엑스선<br/>촬영장치
              </button>
            </div>
        </div>
        <div className='w-[29vw] h-0 my-[1.5vh] border-[0.5px] border-solid border-[#e5e7eb]' />
        <div>
          <p className='text-[18px] font-semibold'>기타</p>
          <div className='flex flex-wrap gap-x-[0.7vw] mt-[1vh]'>
            <div className='flex flex-row gap-2 h-[3vh] w-[14vw]'>
              <input
                type='checkbox'
                className='h-4 w-4 rounded mt-[2px]'
                defaultChecked={false}
              />
              <p className='text-[15px] font-medium'>거짓청구 의료기관 제외</p>
            </div>
            <div className='flex flex-row gap-2 h-[3vh] w-[14vw]'>
              <input
                type='checkbox'
                className='h-4 w-4 rounded mt-[2px]'
                defaultChecked={false}
              />
              <p className='text-[15px] font-medium'>소아 야간 진료기관(20시이후)</p>
            </div>
            <div className='flex flex-row gap-2 h-[3vh] w-[14vw]'>
              <input
                type='checkbox'
                className='h-4 w-4 rounded mt-[2px]'
                defaultChecked={false}
              />
              <p className='text-[15px] font-medium'>실시간 문 연 병원</p>
            </div>
            <div className='flex flex-row gap-2 h-[3vh] w-[14vw]'>
              <input
                type='checkbox'
                className='h-4 w-4 rounded mt-[2px]'
                defaultChecked={false}
              />
              <p className='text-[15px] font-medium'>입원실 운영 병원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalPharmacyFinder