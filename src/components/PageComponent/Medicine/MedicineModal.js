import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ColorData from './SearchData/ColorData';
import ShapeData from './SearchData/ShapeData';
import TypeData from './SearchData/TypeData';
import LineData from './SearchData/LineData';

import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const MedicineModal = ({ isShow, setIsShow, closeSearchBox }) => {
  const [checkedColor, setCheckedColor] = useState('');
  const [checkedShape, setCheckedShape] = useState('');
  const [checkedType, setCheckedType] = useState('');
  const [checkedLine, setCheckedLine] = useState('');

  const handleSearchClick = () => {
    setIsShow(false)
    closeSearchBox()
  }

  return (
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
          <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]' />
          <div className='absolute w-[31vw] h-[11vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.2vw]'>
            <div className='w-[27vw] h-[11vh] flex flex-row flex-wrap gap-x-[0.4vw] gap-y-[0.4vw]'>
              {ColorData.map((color, idx) => {
                if (checkedColor === color.name) {
                  return (
                    <button key={idx} className='w-[3vw] h-[5vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                      <div className='h-[2.5vh] rounded-sm border-b-[0.05px]' style={{ backgroundColor: `${color.color}` }} />
                      <p className='text-[14px] text-[#707070]'>{color.name}</p>
                    </button>
                  )
                }
                return (
                  <button key={idx} className='w-[3vw] h-[5vh] rounded-sm text-center border-[0.5px] border-[#D2D2D2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedColor(color.name)}>
                    <div className='h-[2.5vh] rounded-sm border-b-[0.05px]' style={{ backgroundColor: `${color.color}` }} />
                    <p className='text-[14px] text-[#707070]'>{color.name}</p>
                  </button>
                )
              })}
            </div>
            {
              checkedColor === 'all' ?
                <button className='w-[4vw] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  전체
                </button>
                :
                <button className='w-[4vw] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedColor('all')}>
                  전체
                </button>
            }
          </div>
        </div>
        <div className='w-[100%] h-[20vh] mb-1'>
          <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>모양</p>
          <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]' />
          <div className='absolute w-[31vw] h-[16vh] mt-[4vh] left-[1vw] flex flex-row flex-wrap gap-x-[0.2vw] gap-y-[0.2vh]'>
            {ShapeData.map((shape, idx) => {
              if (checkedShape === shape.name) {
                return (
                  <button key={idx} className='w-[5vw] h-[8vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                    <div className='flex flex-wrap gap-[0.3vw] justify-center'>
                      <img src={shape.img} alt='img' className='mt-[0.6vh]' />
                      <p className='text-[13px] text-[#707070]'>{shape.name}</p>
                    </div>
                  </button>
                )
              }
              return (
                <button key={idx} className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedShape(shape.name)}>
                  <div className='flex flex-wrap gap-[0.3vw] justify-center'>
                    <img src={shape.img} alt='img' className='mt-[0.6vh]' />
                    <p className='text-[13px] text-[#707070]'>{shape.name}</p>
                  </div>
                </button>
              )
            })}
            {
              checkedShape === '기타' ?
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                :
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedShape('기타')}>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
            }
            {
              checkedShape === 'all' ?
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
                :
                <button className='w-[5vw] h-[8vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedShape('all')}>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
            }
          </div>
        </div>
        <div className='w-[100%] h-[13.5vh] mb-1'>
          <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>제형</p>
          <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]' />
          <div className='absolute w-[31vw] h-[9vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.3vw]'>
            {TypeData.map((type, idx) => {
              if (checkedType === type.name) {
                return (
                  <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                    <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                      <img src={type.img} alt='img' className='mt-[0.6vh]' />
                      <p className='text-[13px] text-[#707070]'>{type.name}</p>
                    </div>
                  </button>
                )
              }
              return (
                <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedType(type.name)}>
                  <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                    <img src={type.img} alt='img' className='mt-[0.6vh]' />
                    <p className='text-[13px] text-[#707070]'>{type.name}</p>
                  </div>
                </button>
              )
            })}
            {
              checkedType === '기타' ?
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                : <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedType('기타')}>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
            }
            {
              checkedType === 'all' ?
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
                :
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedType('all')}>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
            }
          </div>
        </div>
        <div className='w-[100%] h-[13.5vh] mb-1'>
          <p className='absolute left-[1vw] pt-[1vh] text-[13px] text-[#c9c7c7] font-semibold'>분할선</p>
          <div className='absolute w-[31vw] h-0 mt-[3.2vh] left-[1vw] border-[0.5px] border-solid border-[#D2D2D2]' />
          <div className='absolute w-[31vw] h-[9vh] mt-[4vh] left-[1vw] flex flex-row gap-x-[0.3vw]'>
            {LineData.map((line, idx) => {
              if (checkedLine === line.name) {
                return (
                  <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                    <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                      <img src={line.img} alt='img' className='mt-[0.6vh]' />
                      <p className='text-[13px] text-[#707070]'>{line.name}</p>
                    </div>
                  </button>
                )
              }
              return (
                <button key={idx} className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedLine(line.name)}>
                  <div className='flex flex-wrap gap-x-[1.3vw] gap-y-[0.3vw] justify-center'>
                    <img src={line.img} alt='img' className='mt-[0.6vh]' />
                    <p className='text-[13px] text-[#707070]'>{line.name}</p>
                  </div>
                </button>
              )
            })}
            {
              checkedLine === '기타' ?
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
                :
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedLine('기타')}>
                  <p className='text-[13px] text-[#707070]'>기타</p>
                </button>
            }
            {
              checkedLine === 'all' ?
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[#DB8888] border-[1px]'>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
                :
                <button className='w-[6vw] h-[9vh] rounded-sm text-center border-[0.5px] border-[#EEE6E2] hover:border-[#DB8888] hover:border-[1px]' onClick={() => setCheckedLine('all')}>
                  <p className='text-[13px] text-[#707070]'>전체</p>
                </button>
            }

          </div>
        </div>
        <div className='w-[100%]'>
          <button className='absolute w-[10vw] h-[5vh] left-[12vw] items-center bg-[#DB8888] rounded-md flex flex-row gap-[1vw]' onClick={() => handleSearchClick()}>
            <BiSearch className='text-[25px] text-[#FFFFFF] ml-[2vw]' />
            <p className='text-[20px] text-[#FFFFFF] font-bold'>검색</p>
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

export default MedicineModal