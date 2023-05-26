import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layout/MainLayout';
import MedicineSearchBox from './MedicineSearchBox';
import axios from 'axios';
import { BsFillCircleFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';

const Medicine = () => {
  const DiseaseData = [
    {
      name: '당뇨',
      color: "#465F85",
      isShow: true
    },
    {
      name: '고혈압',
      color: "#844685",
      isShow: false
    },
    {
      name: '비염',
      color: "#84A0CD",
      isShow: false
    },
    {
      name: '우울증',
      color: "#68878F",
      isShow: false
    },
  ]

  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    fetchMedicineData();
  }, []);

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

    if (isShow) {
      return (
        <div className='flex flex-wrap w-[100%] h-[30vh] bg-[#EEE6E2] rounded-md mb-1'>
          <div className='flex flex-row w-[100%] h-[7vh] items-center gap-[1vw]'>
            <BsFillCircleFill className='text-[4.5vh] h-[7vh] ml-[1vw]' style={{ color: disease.color }} />
            <div className='w-[62vw]'>
              <p className='text-[14px]'>{disease.name}</p>
              <p className='text-[10px] text-[#708099]'>2시간 남았습니다</p>
            </div>
            <button onClick={() => setIsShow(!isShow)}>
              <AiOutlineDown className='text-[16px]' />
            </button>
          </div>
          <div className='w-[67.5vw] h-[22vh] ml-[1vw] mb-[1vh] pt-[1vh] pl-[1vw] rounded-sm bg-white overflow-scroll'>
            {DiseaseData.map((disease) => (
              <React.Fragment key={disease.code}>
                <h2 className='text-xl mt-4 ml-4'>{disease.name}</h2>
                {medicineData
                  .filter((medicine) => medicine.category === disease.name)
                  .map((medicine, idx) => (
                <div key={idx} className='flex flex-row items-center w-[65.5vw] h-[8vh] gap-[1vw] mb-[1vh] drop-shadow rounded-sm bg-[#FBF7F4]'>
                  <img src={medicine.itemImage} alt={medicine.itemName}  className='w-[80px] h-[45px] ml-[1vw] text-center leading-[45px] bg-slate-400'/>
                    
                  <div className=''>
                    <p className='font-semibold text-sm'>{medicine.itemName}</p>
                    <div className='text-[#8C8C8C] text-sm'>{medicine.efcyQesitm}</div>

                  </div>
                </div>
                  ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className='w-[100%] h-[7vh] bg-[#EEE6E2] rounded-md mb-1'>
        <div className='flex flex-row items-center gap-[1vw] absolute left-[1vw]'>
          <BsFillCircleFill className='text-[4.5vh] h-[7vh]' style={{ color: disease.color }} />
          <div className='w-[62vw]'>
            <p className='text-[14px]'>{disease.name}</p>
            <p className='text-[10px] text-[#708099]'>2시간 남았습니다</p>
          </div>
          <button onClick={() => setIsShow(!isShow)}>
            <AiOutlineDown className='text-[16px]' />
          </button>
        </div>
      </div>
    )
  }
  return (
    <MainLayout>
      <MedicineSearchBox />
      <div className='absolute w-[71.5vw] h-[52vh] left-[1vw] top-[14vh] rounded-md bg-[#FFFFFF]'>
        <div className='absolute h-[50vh] w-[69.5vw] top-[1vh] left-[1vw] overflow-scroll'>
          {DiseaseData.map((disease, idx) => {
            return (
              <MyMedicineInfo key={idx} disease={disease} id={idx} />
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default Medicine