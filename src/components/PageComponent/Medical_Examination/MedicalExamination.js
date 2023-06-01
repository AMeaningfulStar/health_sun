import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../../Layout/MainLayout';
import MedicalExaminationSearchBox from './MedicalExaminationSearchBox';
import MedicalExaminationMapModal from './MedicalExaminationMapModal';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MedicalExamination = () => {
  const [searchResult, setSearchResult] = useState([]); // 검색 결과 리스트
  const [searchStatus, setSearchStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 검색 결과의 현재 페이지
  const [siDoCd, setSiDoCd] = useState('');
  const [siGunGuCd, setSiGunGuCd] = useState('');

  const pageNum = [
    { pageNo: 1 },
    { pageNo: 2 },
    { pageNo: 3 },
    { pageNo: 4 },
    { pageNo: 5 },
    { pageNo: 6 },
    { pageNo: 7 },
    { pageNo: 8 },
    { pageNo: 9 },
    { pageNo: 10 },
  ]

  useEffect(() => {
    if (!searchStatus) {
      setSearchResult([]);
    }
  }, [searchStatus]);

  useEffect(() => {
    if (siDoCd && siGunGuCd) {
      getRegnHmcList(siDoCd, siGunGuCd);
    } else {
      setSearchResult([]);
      setSearchResult(false);
    }
  }, [currentPage, siDoCd, siGunGuCd]);

  const getRegnHmcList = async (siDoCode, siGunGuCode) => {
    try {
      if (siDoCode && siGunGuCode) {
        const encodedKey = 'vmLLSjxIiIJEEZeVwaIN1FvfoCOngcNmyrCeJ6ak3pTAotcCTWWJnD2PGMxnSfqpV8fKBQYbDsx0L25AG2IhRA%3D%3D';
        const decodedKey = decodeURIComponent(encodedKey);
        const hmcNm = decodeURIComponent('');
        const siDoCd = encodeURIComponent(siDoCode);
        const siGunGuCd = encodeURIComponent(siGunGuCode);

        const response = await axios.get(
          'http://openapi1.nhis.or.kr/openapi/service/rest/HmcSearchService/getRegnHmcList',
          {
            params: {
              hmcNm,
              siDoCd,
              siGunGuCd,
              ServiceKey: decodedKey,
              numOfRows: 4,
              pageNo: currentPage
            },
          }
        );

        const data = response.data?.response?.body?.items?.item || [];

        setSearchResult(Array.from(data));
        setSearchStatus(true);
      }
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  };

  const HospitalInfo = ({ hospital }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    return (
      <div className='w-[100%] h-[11.5vh] bg-[#EEE6E2] rounded-md mb-1'>
        <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[4.5vh]'>
          <p className='leading-[5vh] ml-[1vw] w-[4vw]'>{hospital.hmcNo}</p>
          <p className='leading-[5vh] w-[58.5vw] font-semibold pl-[1vw]'>{hospital.hmcNm}</p>
          {/* <div className='font-bold text-[15px] ml-[0.5vw] leading-[4vh]'>[소재지주소]
          {hospital.locAddr}</div> */}
          <button className='h-[4.5vh] w-[5vw]' onClick={() => setIsShowModal(!isShowModal)}>
            <div className='h-[3vh] flex flex-row gap-x-1 bg-[#DB8888] rounded-sm items-center justify-center'>
              <FaMapMarkerAlt className='text-[14px] text-[#f9e4e4]' />
              <p className='font-semibold text-[13px] mt-[2px] text-[#f9e4e4]'>지도보기</p>
              <MedicalExaminationMapModal isShow={isShowModal} setIsShow={setIsShowModal} hospital={hospital} />
            </div>
          </button>
        </div>
        <div className='w-[68.5vw] h-[6.3vh] ml-[1vw] rounded-sm bg-[#FFFFFF]'>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[3vh]'>
            <p className='font-semibold text-[14px] ml-[0.5vw] leading-[4vh]'>[검진일]</p>
            <p className='font-medium text-[13px] leading-[4vh]'>{hospital.holidayYn === 'Y' ? '월 화 수 목 금 토' : '월 화 수 목 금 토 일'}</p>
          </div>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[3vh]'>
            <p className='font-semibold text-[14px] ml-[0.5vw] leading-[4vh]'>[검진항목]</p>
            <p className='font-medium text-[13px] leading-[4vh]'>
              {hospital.bcExmdChrgTypeCd ? '유방암검진 ' : ''}
              {hospital.ccExmdChrgTypeCd ? '대장암검진 ' : ''}
              {hospital.cvxcaExmdChrgTypeCd ? '자궁경부암검진 ' : ''}
              {hospital.grenChrgTypeCd ? '일반검진 ' : ''}
              {hospital.ichkChrgTypeCd ? '영유아검진 ' : ''}
              {hospital.lvcaExmdChrgTypeCd ? '간암검진 ' : ''}
              {hospital.mchkChrgTypeCd ? '구강검진' : ''}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const PageBox = () => {
    return(
      <div className='w-[18.5vw] h-[4vh] flex flex-row gap-1'>
        {pageNum.map((item, idx) => {
          if (item.pageNo === currentPage) {
            return (
              <button key={idx} className='w-[23.5px] h-[23.5px] mt-[0.5vh] bg-[#a1a1a1] rounded-sm drop-shadow-md'>
                <p className='leading-[26px] font-semibold text-white'>{item.pageNo}</p>
              </button>
            )
          }

          return (
            <button key={idx} className='w-[23.5px] h-[23.5px] mt-[0.5vh] bg-[#b6b6b6] rounded-sm drop-shadow-md hover:bg-[#a1a1a1]' onClick={() => setCurrentPage(item.pageNo)}>
              <p className='leading-[26px] font-semibold text-white'>{item.pageNo}</p>
            </button>
          )
        })}
      </div>
    )
  }


  return (
    <MainLayout>
      <MedicalExaminationSearchBox getRegnHmcList={getRegnHmcList} setSiDoCd={setSiDoCd} setSiGunGuCd={setSiGunGuCd} siDoCd={siDoCd} />
      {searchStatus ?
        <div className='absolute w-[71.5vw] h-[55vh] left-[1vw] top-[11vh] p-[1vh] rounded-md bg-[#FFFFFF]'>
          {searchResult.map((hospital) => (
            <HospitalInfo key={hospital.hmcNo} hospital={hospital} />
          ))}
          <div className='absolute w-[23vw] h-[4vh] left-[25vw] top-[49.5vh] flex flex-row gap-[0.7vw]'>
            <button>
              <AiOutlineLeft className='text-[18px]' />
            </button>
            <PageBox />
            <button>
              <AiOutlineRight className='text-[18px]' />
            </button>
          </div>
        </div>
        :
        <div className='absolute w-[71.5vw] h-[55vh] left-[1vw] top-[11vh] p-[1vh] rounded-md bg-[#FFFFFF]'>
          <div className='w-[70.5vw] h-[53vh] border-2 border-dashed'>
            <p className='w-[100%] leading-[53vh] text-center font-semibold text-[20px] text-[#AEAEAE]'>지역을 선택하여 검색해주세요</p>
          </div>
        </div>
      }
    </MainLayout>
  );
};

export default MedicalExamination;