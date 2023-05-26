import React, { useState, useEffect } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const MedicalExaminationSearchBox = ({ setSelectedSido, setSelectedSigungu }) => {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedSiDoCd, setSelectedSiDoCd] = useState(null);
  const [selectedSiGunGuCd, setSelectedSiGunGuCd] = useState(null);

  const handleRegionSelect = (regionCode) => {
    if (!selectedSiDoCd) {
      setSelectedSiGunGuCd(regionCode);
    } else if (!selectedSiGunGuCd) {
      setSelectedSiGunGuCd(regionCode);
    } else {
      setSelectedSido(selectedSiDoCd);
      setSelectedSigungu(selectedSiGunGuCd);
      setIsShowSelect(false);
    }
  };

  const SelectBox = () => {
    const [selectedSiDoCd, setSelectedSiDoCd] = useState('');
  const [selectedSiGunGuCd, setSelectedSiGunGuCd] = useState('');

  useEffect(() => {
    // 시/도 선택 시 호출되는 함수
    handleSelectSiDo(selectedSiDoCd);
  }, [selectedSiDoCd]);

  const handleSelectSiDo = (siDoCd) => {
    setSelectedSiDoCd(siDoCd);
    setSelectedSiGunGuCd('');
  };

  const handleSelectSiGunGu = (siGunGuCd) => {
    setSelectedSiGunGuCd(siGunGuCd);
  };
  
    if (isShowSelect) {
      return (
        <div>
          {/* 시/도 선택 */}
          <select value={selectedSiDoCd} onChange={(e) => handleSelectSiDo(e.target.value)}>
            <option>서울</option>
            <option>경기도</option>
            <option>강원도</option>
            {/* 다른 시/도들을 추가해주세요 */}
          </select>
    
          {/* 시/군/구 선택 */}
          {selectedSiDoCd && (
            <div>
              <h3>시/군/구</h3>
              {selectedSiDoCd === '11' && (
                <>
                  {[
                    { siGunGuCd: '110', name: '종로구' },
                    { siGunGuCd: '140', name: '중구' },
                    { siGunGuCd: '170', name: '용산구' },
                    { siGunGuCd: '200', name: '성동구' },
                    { siGunGuCd: '215', name: '광진구' },
                    { siGunGuCd: '230', name: '동대문구' },
                    { siGunGuCd: '260', name: '중랑구' },
                    { siGunGuCd: '290', name: '성북구' },
                    { siGunGuCd: '305', name: '강북구' },
                    { siGunGuCd: '320', name: '도봉구' },
                    { siGunGuCd: '350', name: '노원구' },
                    { siGunGuCd: '380', name: '은평구' },
                    { siGunGuCd: '410', name: '서대문구' },
                    { siGunGuCd: '440', name: '마포구' },
                    { siGunGuCd: '470', name: '양천구' },
                    { siGunGuCd: '500', name: '강서구' },
                    { siGunGuCd: '530', name: '구로구' },
                    { siGunGuCd: '545', name: '금천구' },
                    { siGunGuCd: '560', name: '영등포구' },
                    { siGunGuCd: '590', name: '동작구' },
                    { siGunGuCd: '620', name: '관악구' },
                    { siGunGuCd: '650', name: '서초구' },
                    { siGunGuCd: '680', name: '강남구' },
                    { siGunGuCd: '710', name: '송파구' },
                    { siGunGuCd: '740', name: '강동구' },
                  ].map(({ siGunGuCd, name }) => (
                    <button
                      key={siGunGuCd}
                      onClick={() => handleSelectSiGunGu(siGunGuCd)}
                      className={selectedSiGunGuCd === siGunGuCd ? 'selected' : ''}
                    >
                      {name}
                    </button>
                  ))}
                </>
              )}
              {selectedSiDoCd === '31' && (
                <>
                  {/* 경기도 시/군/구 버튼들 */}
                  {[
                    { siGunGuCd: '110', name: '수원시' },
                    { siGunGuCd: '130', name: '성남시' },
                    { siGunGuCd: '150', name: '고양시' },
                    { siGunGuCd: '170', name: '용인시' },
                    { siGunGuCd: '190', name: '부천시' },
                    { siGunGuCd: '210', name: '안산시' },
                    { siGunGuCd: '230', name: '남양주시' },
                    { siGunGuCd: '240', name: '화성시' },
                    { siGunGuCd: '250', name: '평택시' },
                    { siGunGuCd: '270', name: '의정부시' },
                    { siGunGuCd: '290', name: '시흥시' },
                    { siGunGuCd: '310', name: '파주시' },
                    { siGunGuCd: '330', name: '광명시' },
                    { siGunGuCd: '350', name: '김포시' },
                    { siGunGuCd: '360', name: '군포시' },
                    { siGunGuCd: '380', name: '광주시' },
                    { siGunGuCd: '400', name: '이천시' },
                    { siGunGuCd: '410', name: '양주시' },
                    { siGunGuCd: '430', name: '오산시' },
                    { siGunGuCd: '450', name: '구리시' },
                    { siGunGuCd: '470', name: '남원주시' },
                    { siGunGuCd: '490', name: '춘천시' },
                    { siGunGuCd: '500', name: '원주시' },
                    { siGunGuCd: '520', name: '강릉시' },
                    { siGunGuCd: '530', name: '동해시' },
                    { siGunGuCd: '550', name: '태백시' },
                  ].map(({ siGunGuCd, name }) => (
                    <button
                      key={siGunGuCd}
                      onClick={() => handleSelectSiGunGu(siGunGuCd)}
                      className={selectedSiGunGuCd === siGunGuCd ? 'selected' : ''}
                    >
                      {name}
                    </button>
                  ))}
                </>
              )}
              {selectedSiDoCd === '42' && (
                <>
                  {/* 강원도 시/군/구 버튼들 */}
                  {[
                    { siGunGuCd: '110', name: '춘천시' },
                    { siGunGuCd: '130', name: '원주시' },
                    { siGunGuCd: '150', name: '강릉시' },
                    { siGunGuCd: '170', name: '동해시' },
                    { siGunGuCd: '190', name: '태백시' },
                    { siGunGuCd: '210', name: '속초시' },
                    { siGunGuCd: '230', name: '삼척시' },
                    { siGunGuCd: '250', name: '홍천군' },
                    { siGunGuCd: '270', name: '횡성군' },
                    { siGunGuCd: '290', name: '영월군' },
                    { siGunGuCd: '310', name: '평창군' },
                    { siGunGuCd: '330', name: '정선군' },
                    { siGunGuCd: '350', name: '철원군' },
                    { siGunGuCd: '370', name: '화천군' },
                    { siGunGuCd: '390', name: '양구군' },
                    { siGunGuCd: '410', name: '인제군' },
                    { siGunGuCd: '430', name: '고성군' },
                    { siGunGuCd: '450', name: '양양군' },
                  ].map(({ siGunGuCd, name }) => (
                    <button
                      key={siGunGuCd}
                      onClick={() => handleSelectSiGunGu(siGunGuCd) & setIsShowSelect(false)}
                      className={selectedSiGunGuCd === siGunGuCd ? 'selected' : ''}
                    >
                      {name}
                    </button>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      );
    };
    return null;
  };

  return (
    <div className='absolute w-[71.5vw] h-[11vh] left-[1vw] top-[2vh] rounded-md bg-[#FFFFFF]'>
      <div className='flex flex-row gap-[0.5vw] absolute h-[5vh] left-[1vw] top-[1vh]'>
        <button
          className='w-[32vw] h-[5vh] rounded-sm border-[#707070] border-[0.5px]'
          onClick={() => setIsShowSelect(!isShowSelect)}
        >
          <div className='flex flex-row gap-[6vw]'>
            <FaMapMarkerAlt className='text-[20px] text-[#465F85] ml-[2vw]' />
            <p>
              {selectedSiDoCd ? (
                selectedSiGunGuCd ? (
                  `${selectedSiDoCd} > ${selectedSiGunGuCd}`
                ) : (
                  `${selectedSiDoCd} > 시/군/구`
                )
              ) : (
                '시/도 > 시/군/구'
              )}
            </p>
            <AiOutlineDown className='text-[18px] h-[3vh] ml-[2vw]' />
          </div>
        </button>
        <button
          className='w-[32vw] h-[5vh] rounded-sm border-[#707070] border-[0.5px]'
          onClick={() => setIsShowModal(true)}
        >
          <div className='flex flex-row items-center justify-center'>
            <BiSearch className='text-[18px] text-[#465F85] ml-[2vw]' />
            <p>상세 검색</p>
          </div>
        </button>
      </div>
      <SelectBox />
      {isShowModal && (
        <div className='w-[60vw] h-[70vh] bg-[#FFFFFF] rounded-lg'>
          {/* 상세 검색 모달창 내용 */}
          <button onClick={() => setIsShowModal(false)}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default MedicalExaminationSearchBox;
