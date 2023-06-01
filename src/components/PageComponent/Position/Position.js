import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layout/MainLayout';
import PositionKakaoMap from '../../Kakao/PositionKakaoMap';
import HealthMapViewer from './PositionSearchBox/HealthMapViewer';
import GoodHospitalsInOurNeighborhood from './PositionSearchBox/GoodHospitalsInOurNeighborhood';
import SpecializedHospitalFinder from './PositionSearchBox/SpecializedHospitalFinder';
import HospitalPharmacyFinder from './PositionSearchBox/HospitalPharmacyFinder';
import axios from 'axios';



const Position = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [clickMenu, setClickMenu] = useState('');
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    getRegnHmcList();
  }, []);

  const handleClickMenu = ( menuNum ) => {
    if( clickMenu === menuNum && isShow ){
      setIsShow(false);
    }
    else{
      setIsShow(true);
      setClickMenu(menuNum)
    }
  }

  const SearchBox = () => {
    if(isShow){
      switch(clickMenu){
        case '건강 지도 보기':
          return <HealthMapViewer />
        case '병원 및 약국 종류별 찾기':
          return <HospitalPharmacyFinder handleCategoryChange={handleCategoryChange} setIsShow={setIsShow} />
        case '우리 동네 좋은 병원 찾기':
          return <GoodHospitalsInOurNeighborhood />
        case '전문 병원 찾기':
          return <SpecializedHospitalFinder />
        default:
          return ;
      }
    }
  }

  const getRegnHmcList = async () => {
    try {
      const encodedKey = 'vmLLSjxIiIJEEZeVwaIN1FvfoCOngcNmyrCeJ6ak3pTAotcCTWWJnD2PGMxnSfqpV8fKBQYbDsx0L25AG2IhRA%3D%3D';
      const decodedKey = decodeURIComponent(encodedKey);
      const hmcNm = decodeURIComponent('');
      const siDoCd = encodeURIComponent('42');
      const siGunGuCd = encodeURIComponent('110');

      const response = await axios.get(
        'http://openapi1.nhis.or.kr/openapi/service/rest/HmcSearchService/getRegnHmcList',
        {
          params: {
            hmcNm,
            siDoCd,
            siGunGuCd,
            numOfRows: 1000, 
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredResults = searchResult.filter((hospital) => {
    if (selectedCategory === '') {
      return null; // Show all hospitals if no category is selected
    } else {
      return hospital.ykindnm === selectedCategory;
    }
  });

  return (
    <MainLayout>
        <div className='absolute flex flex-row gap-x-[1vw] left-[1vw] top-[1vh] w-[71.5vw] z-10'>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => handleClickMenu('건강 지도 보기')}>건강 지도 보기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => handleClickMenu('병원 및 약국 종류별 찾기')}>병원 및 약국 종류별 찾기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => handleClickMenu('우리 동네 좋은 병원 찾기')}>우리 동네 좋은 병원 찾기</div>
          <div className='w-[18vw] h-[5vh] bg-[#DCA3A3] rounded-md hover:bg-[#DB8888] leading-[5vh] text-center text-[#FFFFFF] drop-shadow-lg font-bold text-[0.9rem]' onClick={() => handleClickMenu('전문 병원 찾기')}>전문 병원 찾기</div>
        </div>
        <div className='absolute w-[73.5vw] h-[61vh] top-[7vh]'>
          <PositionKakaoMap hospitals={filteredResults} />
        </div>
      <SearchBox />
    </MainLayout>
  )
}

export default Position




  

  

//   return (
//     <MainLayout>
//       <div className='absolute w-[71.5vw] h-[52vh] left-[1vw] top-[14vh] p-[1vh] rounded-md bg-[#FFFFFF] overflow-scroll'>
//         <div className='flex mb-2'>
//           <button
//             className={`mr-2 ${
//               selectedCategory === '종합병원' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//             }`}
//             onClick={() => handleCategoryChange('종합병원')}
//           >
//             종합병원
//           </button>
//           <button
//             className={`mr-2 ${
//               selectedCategory === '병원' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//             }`}
//             onClick={() => handleCategoryChange('병원')}
//           >
//             병원
//           </button>
//           <button
//             className={`mr-2 ${
//               selectedCategory === '의원' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//             }`}
//             onClick={() => handleCategoryChange('의원')}
//           >
//             의원
//           </button>
//           <button
//             className={`mr-2 ${
//               selectedCategory === '치과의원' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//             }`}
//             onClick={() => handleCategoryChange('치과의원')}
//           >
//             치과의원
//           </button>
//         </div>
//         <PositionMap hospitals={filteredResults} />
//       </div>
//     </MainLayout>
//   );
// };

// export default Position;