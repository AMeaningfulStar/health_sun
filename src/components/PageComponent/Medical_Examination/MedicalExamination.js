import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../../Layout/MainLayout';
import MedicalExaminationSearchBox from './MedicalExaminationSearchBox';
import MedicalExaminationMapModal from './MedicalExaminationMapModal';

import { FaMapMarkerAlt } from 'react-icons/fa';

const MedicalExamination = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('영등포구');

  useEffect(() => {
    if (selectedRegion) {
      getRegnHmcList();
    } else {
      setSearchResult([]);
    }
  }, []);

  const getRegnHmcList = async () => {
    try {
      const encodedKey = 'vmLLSjxIiIJEEZeVwaIN1FvfoCOngcNmyrCeJ6ak3pTAotcCTWWJnD2PGMxnSfqpV8fKBQYbDsx0L25AG2IhRA%3D%3D';
      const decodedKey = decodeURIComponent(encodedKey);
      const hmcNm = decodeURIComponent('%EC%84%9C%EC%9A%B8');
      const siDoCd = encodeURIComponent('11');
      const siGunGuCd = encodeURIComponent('560');

      const response = await axios.get(
        'http://openapi1.nhis.or.kr/openapi/service/rest/HmcSearchService/getRegnHmcList',
        {
          params: {
            hmcNm,
            siDoCd,
            siGunGuCd,
            ServiceKey: decodedKey,
          },
        }
      );

      const data = response.data?.response?.body?.items?.item || [];
      setSearchResult(data);
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  };

  const HospitalInfo = ({ hospital}) => {
    const [isShowModal, setIsShowModal] = useState(false);
  
    return (
      <div className='w-[100%] h-[15vh] bg-[#EEE6E2] rounded-md mb-1'>
        <div className='flex flex-row gap-x-[1vw] w-[100%] h-[6vh]'>
          <p className='leading-[6vh] ml-[1vw]'>{hospital.hmcNo}</p>
          <p className='leading-[6vh] w-[61vw] font-bold'>{hospital.hmcNm}</p>
          <div className='font-bold text-[15px] ml-[0.5vw] leading-[4vh]'>[소재지주소]
          {hospital.locAddr}</div>
          <button className='h-[6vh]' onClick={() => setIsShowModal(!isShowModal)}>
            <div className='w-[5vw] h-[3.5vh] flex flex-row gap-x-1 bg-[#DB8888] rounded-sm items-center justify-center'>
              <FaMapMarkerAlt className='text-[14px] text-[#f9e4e4]' />
              <p className='font-semibold text-[13px] mt-[2px] text-[#f9e4e4]'>지도보기</p>
              <MedicalExaminationMapModal isShow={isShowModal} setIsShow={setIsShowModal} cxVl={hospital.cxVl} cyVl={hospital.cyVl} />
            </div>
          </button>
        </div>
        <div className='w-[68.5vw] h-[8vh] ml-[1vw] rounded-md bg-[#FFFFFF]'>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[4vh]'>
            <p className='font-bold text-[15px] ml-[0.5vw] leading-[4vh]'>[영업일]</p>
            <p className='font-semibold text-[13px] leading-[4vh]'> {hospital.holidayYn === 'Y' ? '월 화 수 목 금 토' : '월 화 수 목 금 토 일'}</p>
          </div>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[4vh]'>
            <p className='font-bold text-[15px] ml-[0.5vw] leading-[4vh]'>[검진항목]</p>
            <p className='font-semibold text-[13px] leading-[4vh]'>
              {hospital.bcExmdChrgTypeCd == '1' && '유방암검진 '}
              {hospital.ccExmdChrgTypeCd == '1' && '대장암검진 '}
              {hospital.cvxcaExmdChrgTypeCd == '1' && '자궁경부암검진 '}
              {hospital.grenChrgTypeCd == '1' && '일반검진 '}
              {hospital.ichkChrgTypeCd == '1' && '영유아검진 '}
              {hospital.lvcaExmdChrgTypeCd == '1' && '간암검진 '}
              {hospital.mchkChrgTypeCd == '1' && '구강검진'}
            </p>
          </div>
          <div className='flex flex-row gap-x-[0.5vw] w-[100%] h-[4vh]'>
          
        </div>
        
        </div>
      </div>
    );
  };
  

  return (
    <MainLayout>
      <MedicalExaminationSearchBox setSelectedRegion={setSelectedRegion} />
      <div className='absolute w-[71.5vw] h-[52vh] left-[1vw] top-[14vh] p-[1vh] rounded-md bg-[#FFFFFF] overflow-scroll'>
        {searchResult.map((hospital) => (
          <HospitalInfo key={hospital.hmcNo} hospital={hospital} />
        ))}
      </div>
    </MainLayout>
  );
};

export default MedicalExamination;