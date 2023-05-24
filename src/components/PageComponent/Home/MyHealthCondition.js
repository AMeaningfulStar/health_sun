import React from 'react';

import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

const MyHealthCondition = () => {
  return (
    <div className='bg-[#FBF7F4] w-[50vw] h-[40vh] rounded-lg absolute left-[16vw] top-[15.5vh]' >
      <div className='absolute left-[1.5vw] top-[2vh]'>
        <p className='text-[16px] font-bold'>나에게 필요한 영양제</p>
      </div>
      <div className='absolute h-[32vh] w-[48vw] top-[6vh] left-[1vw] overflow-scroll'>
        {/* 1 */}
          <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
            <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
              <PieChart 
                data={[
                  {
                    value: 80,
                    color: '#465F85',
                    title: 'name1'
                  },
                ]}
                reveal={80} // 퍼센트
                lineWidth={20} // 두께
                lengthAngle={360}
                background='#f3f3f3'
                rounded
                animate
                label={({ dataEntry }) => dataEntry.value + '%'}
                labelStyle={{
                  fontSize: '26px',
                  fill: '#33333'
                }}
                labelPosition={0}
                className='h-[4.5vh] w-[auto]'
              />
              <div className='w-[40vw]'>
                <p className='text-[13px]'>나의 건강 검진</p>
                <p className='text-[10px] text-[#AEAEAE]'>다음 건강 검진까지 26일 남았습니다</p>
              </div>
              <Link to={'/medicalExamination'}>
                <p className='text-[12px] text-[#AEAEAE] font-bold'>보기</p>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
            <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
              <PieChart 
                data={[
                  {
                    value: 55,
                    color: '#844685',
                    title: 'name2'
                  },
                ]}
                reveal={55} // 퍼센트
                lineWidth={20} // 두께
                lengthAngle={360}
                background='#D3BCD3'
                rounded
                animate
                label={({ dataEntry }) => dataEntry.value + '%'}
                labelStyle={{
                  fontSize: '26px',
                  fill: '#33333'
                }}
                labelPosition={0}
                className='h-[4.5vh] w-[auto]'
              />
              <div className='w-[40vw]'>
                <p className='text-[13px]'>나의 예방 접종(B형간염 2차)</p>
                <p className='text-[10px] text-[#AEAEAE]'>다음 예방접종까지 1개월 남았습니다</p>
              </div>
              <Link to={'/vaccination'}>
                <p className='text-[12px] text-[#AEAEAE] font-bold'>보기</p>
              </Link>
            </div>
          </div>
          <div className='w-[100%] h-[7vh] rounded-md mb-1 bg-[#FFFFFF] border-[1px] border-[#EAEAEA]'>
            <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw] pt-[1.2vh]'>
              <PieChart 
                data={[
                  {
                    value: 68,
                    color: '#C55D42',
                    title: 'name3'
                  },
                ]}
                reveal={68} // 퍼센트
                lineWidth={20} // 두께
                lengthAngle={360}
                background='#FEDFD7'
                rounded
                animate
                label={({ dataEntry }) => dataEntry.value + '%'}
                labelStyle={{
                  fontSize: '26px',
                  fill: '#33333'
                }}
                labelPosition={0}
                className='h-[4.5vh] w-[auto]'
              />
              <div className='w-[40vw]'>
                <p className='text-[13px]'>나의 예방 접종(독감)</p>
                <p className='text-[10px] text-[#AEAEAE]'>다음 예방 접종까지 3개월 남았습니다</p>
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