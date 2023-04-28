import React, { useState, useEffect } from 'react';

const HealthSchedule = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);

  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // 달력 변수
  const findDate = totalDate.indexOf(DATE.getDate());
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7)-1;

  const changeDate = (month) => {
    //이전 날짜
    let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PVLastDay = new Date(YEAR, month - 1, 0).getDay();
    //다음 날짜
    const ThisLasyDay = new Date(YEAR, month, 0).getDay();
    const ThisLasyDate = new Date(YEAR, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    //현재날짜
    let TD = [];

    TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

    return PVLD.concat(TD, TLD);
  };
  
  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const goToday = () => {
    let goMonth = new Date().getMonth() + 1;
    setMonth(goMonth);
  };

  return (
    <div className='bg-[#FBF7F4] w-[22vw] h-[40vh] rounded-lg absolute left-[67vw] top-[15.5vh]'>
      <div className='absolute left-[1vw] top-[2vh]'>
        <p className='text-[16px] font-bold'>건강 일정</p>
      </div>
      <div className=' absolute top-[6vh] w-[20vw] h-[28vh] left-[1vw]'>  
        <div className='flex flex-row items-center gap-[5.5vw]'>
          <div className='text-[13px] w-[10vw]'>{ monthNames[month - 1] } { year }</div>
          <div className='text-[13px] text-[#B0B0B0] font-bold flex flex-row gap-[1vw]'>
            <button className='' onClick={() => setMonth(month - 1)}>&lt;</button>
            <button width="3vw" onClick={() => goToday()}>
              오늘
            </button>
            <button onClick={() => setMonth(month + 1)}>&gt;</button>
          </div>
        </div>
      </div>
      <div className='absolute w-[20vw] h-0 top-[9vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]'/>
      <div className='absolute w-[20vw] h-[auto] top-[9.5vh] left-[1vw] flex flex-row items-center gap-x-[1vw] text-[10px] text-center'>
        { DAY.map((day, idx) => {
          return <p className='w-[2vw]' key={idx}>{day}</p>
        })}
      </div>
      <div className='absolute w-[20vw] h-[26vh] left-[1vw] top-[12vh] flex flex-row flex-wrap gap-x-[1vw] gap-y-[1.5vh] text-center'>
        { totalDate.map((date, idx) => {
          switch(MONTH){
            case month:
              if(idx <= firstDate && idx >= lastDate && idx !== findDate){
                return <p className='w-[2vw] h-[auto]' key={idx}>{ date }</p>
              }
              else if(idx === findDate){
                return <p className='w-[2vw] h-[auto] text-[#DB8888]' key={idx}>{ date }</p>
              }
              break;
            default:
              if(idx <= firstDate && idx >= lastDate){
                return <p className='w-[2vw] h-[auto]' key={idx}>{ date }</p>
              }
          }

          return <p className='w-[2vw] h-[auto]' key={idx}></p>
        })}
      </div>
    </div>
  )
}

export default HealthSchedule