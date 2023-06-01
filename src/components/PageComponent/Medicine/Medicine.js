import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layout/MainLayout';
import MedicineSearchBox from './MedicineSearchBox';
import axios from 'axios';
import { BsFillCircleFill } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from 'react-icons/ai';

const Medicine = () => {
  const DiseaseData = [
    {
      name: '비염',
      color: "#844685",
      isShow: false
    },
    {
      name: '우울증',
      color: "#84A0CD",
      isShow: false
    },
  ]

  const MedicineSearchData = [
    {
      itemName: '게보린정'
    },
    {
      itemName: '써모젠정'
    },
    {
      itemName: '아루진정'
    },
    {
      itemName: '알티디75정'
    },
    {
      itemName: '가딘정75밀리그램'
    },
    {
      itemName: '라니돈정'
    },
    {
      itemName: '라니드정'
    },
    {
      itemName: '라니티엠정'
    },
    {
      itemName: '라딘정'
    },
    {
      itemName: '아이란정'
    },
  ];

  const [medicineData, setMedicineData] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);

  useEffect(() => {
    fetchMedicineData();
  }, []);

  useEffect(() => {
    if(searchStatus){
      searchMedicineInfo();
    }
  }, [searchStatus])

  const fetchMedicineData = async () => {
    try {
      const medicinePromises = DiseaseData.map(async (disease) => {
        const response = await axios.get('http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList', {
          params: {
            ServiceKey: 'vmLLSjxIiIJEEZeVwaIN1FvfoCOngcNmyrCeJ6ak3pTAotcCTWWJnD2PGMxnSfqpV8fKBQYbDsx0L25AG2IhRA==',
            pageNo: 1,
            numOfRows: 3,
            efcyQesitm: disease.name,
            type: 'json'
          }
        });

        const medicineItems = response.data.body.items;
        const medicineItemsWithCategory = medicineItems.map((item) => ({
          ...item,
          category: disease.name
        }));

        return medicineItemsWithCategory;
      });

      const medicineData = await Promise.all(medicinePromises);
      setMedicineData(medicineData.flat());
    } catch (error) {
      console.error('Error fetching medicine data:', error);
    }
  };

  const MyMedicineInfo = ({ disease }) => {
    const [isShow, setIsShow] = useState(false);
    const regex = /<p>(.*?)<\/p>/i;

    if (isShow) {
      return (
        <div className='flex flex-wrap w-[100%] max-h-[30vh] min-h-[18vh] bg-[#EEE6E2] rounded-md mb-1'>
          <div className='flex flex-row w-[100%] h-[7vh] items-center gap-[1vw]'>
            <BsFillCircleFill className='text-[4.5vh] h-[7vh] ml-[1vw]'  style={{ color: `${disease.color}` }}  />
            <div className='w-[62vw]'>
              <p className='text-[16px] font-semibold'>{disease.name}</p>
            </div>
            <button onClick={() => setIsShow(!isShow)}>
              <AiOutlineDown className='text-[16px]' />
            </button>
          </div>
          <div className='w-[67.5vw] max-h-[22vh] min-h-[9vh] ml-[1vw] mb-[1vh] pt-[1vh] pl-[1vw] rounded-sm bg-white overflow-scroll'>
             {medicineData
               .filter((medicine) => medicine.category === disease.name)
               .map((medicine, idx) => {
                return(
                 <div key={idx} className='flex flex-row items-center w-[65.5vw] h-[8vh] gap-[1vw] mb-[1vh] drop-shadow rounded-sm bg-[#FBF7F4]'>
                   {medicine.itemImage ?
                    <img src={medicine.itemImage} alt={medicine.itemName}  className='w-[80px] h-[45px] ml-[1vw] text-center leading-[45px] bg-slate-400'/>
                    :
                    <div className='w-[80px] h-[45px] ml-[1vw] text-center leading-[45px] bg-slate-400'>
                      <p className='text-[10px]'>이미지 없음</p>
                    </div>
                    }
                   <div className='flex flex-col'>
                     <p className='font-semibold text-[12px]'>{medicine.itemName}</p>
                     <div className='text-[#8C8C8C] text-[11px]'>{medicine.efcyQesitm.match(regex)[1]}</div>
                   </div>
                 </div>
               )})}
           </div>
        </div>
      )
    }

    return (
      <div className='w-[100%] h-[7vh] bg-[#EEE6E2] rounded-md mb-1'>
        <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw]'>
          <BsFillCircleFill className='text-[4.5vh] h-[7vh]'  style={{ color: `${disease.color}`}}  />
          <div className='w-[62vw]'>
            <p className='text-[16px] font-semibold'>{disease.name}</p>
          </div>
          <button onClick={() => setIsShow(!isShow)}>
            <AiOutlineDown className='text-[16px]' />
          </button>
        </div>
      </div>
    )
  }

  const searchMedicineInfo = async () => {
    try {
      const medicinePromises = MedicineSearchData.map(async (disease) => {
        const response = await axios.get('http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList', {
          params: {
            ServiceKey: 'vmLLSjxIiIJEEZeVwaIN1FvfoCOngcNmyrCeJ6ak3pTAotcCTWWJnD2PGMxnSfqpV8fKBQYbDsx0L25AG2IhRA==',
            pageNo: 1,
            numOfRows: 5,
            itemName: disease.itemName,
            type: 'json'
          }
        });

        const medicineItems = response.data.body.items;
        const medicineItemsWithCategory = medicineItems.map((item) => ({
          ...item,
          category: disease.name
        }));

        return medicineItemsWithCategory;
      });

      const medicineData = await Promise.all(medicinePromises);
      setMedicineData(medicineData.flat());
    } catch (error) {
      console.error('Error fetching medicine data:', error);
    }
  };

  const handleSearchClick = () => {
    setMedicineData([]);
    setSearchStatus(true);
  }

  return (
    <MainLayout>
      <MedicineSearchBox handleSearchClick={handleSearchClick}/>
      <div className='absolute w-[71.5vw] h-[52vh] left-[1vw] top-[14vh] rounded-md bg-[#FFFFFF]'>
        <div className='absolute h-[50vh] w-[69.5vw] top-[1vh] left-[1vw] overflow-scroll'>
          { searchStatus ?
              medicineData.map((item, idx) => {
                const regex = /<p>(.*?)<\/p>/i;

                return (
                  <div key={idx} className='flex flex-row items-center w-[100%] h-[8vh] gap-[1vw] mb-[1vh] drop-shadow rounded-md bg-[#EEE6E2]'>
                   {item.itemImage ?
                    <img src={item.itemImage} alt={item.itemName}  className='w-[80px] h-[50px] ml-[0.5vw] text-center leading-[45px] rounded-sm'/>
                    :
                    <div className='w-[80px] h-[50px] ml-[0.5vw] text-center leading-[45px] bg-slate-400 rounded-sm'>
                      <p className='text-[10px]'>이미지 없음</p>
                    </div>
                    }
                   <div className='flex flex-col h-[50px] w-[62vw]'>
                     <p className='font-semibold text-[14px]'>{item.itemName}</p>
                     <div className='text-[#8C8C8C] text-[11px]'>{item.efcyQesitm.match(regex)[1]}</div>
                   </div>
                 </div>
                )
              })
            :
              DiseaseData.map((disease, idx) => {
              return (
                <MyMedicineInfo key={idx} disease={disease} id={idx} />
              )
            })
          }
        </div>
      </div>
    </MainLayout>
  )
}

export default Medicine