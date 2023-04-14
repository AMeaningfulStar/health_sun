import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ColorData from './SearchData/ColorData';
import ShapeData from './SearchData/ShapeData';
import TypeData from './SearchData/TypeData';
import LineData from './SearchData/LineData';

import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const MedicineSearchBox = () => {
  const [ isShow, setIsShow ] = useState(false);

  return (
    <div className='absolute w-[71.5vw] h-[11vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
      <div className='absolute w-[auto] top-[1.5vh] left-[1vw] flex flex-row gap-[0.5vw]'>
        <input
          type='text'
          className='w-[66vw] h-[4vh] rounded-sm border-[1px] border-solid border-[#D2D2D2] text-[#B0B0B0] pl-[1vw]'
          value={'약 이름으로 검색하세요'}
        />
        <button className='w-[3vw] bg-[#DB8888] rounded-sm'>
          <BiSearch className='w-[100%] text-[20px] text-[#FFFFFF]'/>
        </button>
      </div>
      <div className='absolute w-[auto] top-[6.5vh] left-[1vw] '>
        <button className='text-[15px] text-[#969595] font-semibold hover:text-[#707070]' onClick={() => setIsShow(true)}>[모양으로 검색하기]</button>
        <ReactModal
          isOpen={isShow}
          onRequestClose={() => setIsShow(false)}
          className='absolute w-[35vw] h-[80vh] left-[34vw] top-[10vh] rounded-md bg-[#EEE6E2]'
        > 
          <div className='absolute left-[1.5vw] top-[2vh] flex flex-row gap-[40vh] items-center'>
            <p className='text-[20px] text-[#707070] font-bold'>모양으로 검색하기</p>
              <button>
              <AiOutlineClose className='text-[23px] text-[#707070]' onClick={() => setIsShow(false)} />
            </button>
          </div>
          <div className='absolute w-[33vw] h-[71vh] left-[1vw] top-[7vh] rounded-md bg-[#FFFFFF] flex flex-col'>
            <div className='w-[100%] h-[15.5vh] mb-1'>
              <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>색상</p>
              <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]'/>
              <div className='absolute w-[31vw] h-[11vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.2vw]'>
                <div className='w-[27vw] h-[11vh] flex flex-row flex-wrap gap-x-[0.4vw] gap-y-[0.4vw]'>
                  { ColorData.map((color, idx) => {
                    return (
                      <button key={idx} className='w-[3vw] h-[5vh] rounded-sm text-center border-[0.5px] border-[#D2D2D2] hover:border-[#DB8888] hover:border-[1px]'>
                        <div className='h-[2.5vh] rounded-sm border-b-[0.05px]' style={{ backgroundColor : `${ color.color }`}}/>
                        <p className='text-[14px] text-[#707070]'>{ color.name }</p>
                      </button>
                    )
                  })}
                </div>
                <button className='w-[4vw] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  전체
                </button>
              </div>
            </div>
            <div className='w-[100%] h-[20vh] mb-1'>
              <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>모양</p>
              <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]'/>
              <div className='absolute w-[31vw] h-[16vh] mt-[4vh] left-[1vw] flex flex-row flex-wrap gap-x-[0.2vw] gap-y-[0.2vh]'>
                { ShapeData.map(( shape, idx) => {
                  return(
                    <button key={idx} className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                      <div className='flex flex-wrap gap-[0.3vw] justify-center'>
                        <img src={shape.img} alt='img' className='mt-[0.6vh]'/>
                        <p className='text-[13px] text-[#707070]'>{ shape.name }</p>
                      </div>
                    </button>
                  )
                })}
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
              </div>
            </div>
            <div className='w-[100%] h-[13.5vh] mb-1'>
              <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>제형</p>
              <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]'/>
              <div className='absolute w-[31vw] h-[9vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.3vw]'>
                { TypeData.map(( type, idx ) => {
                  return(
                    <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                      <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                        <img src={type.img} alt='img' className='mt-[0.6vh]'/>
                        <p className='text-[13px] text-[#707070]'>{ type.name }</p>
                      </div>
                    </button>
                  )
                })}
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
              </div>
            </div>
            <div className='w-[100%] h-[13.5vh] mb-1'>
              <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>분할선</p>
              <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]'/>
              <div className='absolute w-[31vw] h-[9vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.3vw]'>
                { LineData.map(( line, idx ) => {
                  return(
                    <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                      <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                        <img src={line.img} alt='img' className='mt-[0.6vh]'/>
                        <p className='text-[13px] text-[#707070]'>{ line.name }</p>
                      </div>
                    </button>
                  )
                })}
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
              </div>
            </div>
            <div className='w-[100%]'>
              <button className='absolute w-[10vw] h-[5vh] left-[12vw] items-center bg-[#DB8888] rounded-md flex flex-row gap-[1vw]' onClick={() => setIsShow(false)}>
                <BiSearch className='text-[25px] text-[#FFFFFF] ml-[2vw]'/>
                <p className='text-[20px] text-[#FFFFFF] font-bold'>검색</p>
              </button>
            </div>  
          </div>
        </ReactModal>
      </div>
    </div>
  )
}

export default MedicineSearchBox