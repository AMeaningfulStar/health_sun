import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import MyHealthCondition from './MyHealthCondition';
import MedicineInfo from './MedicineInfo';
import VaccinationAdvise from './VaccinationAdvise';
import HealthSchedule from './HealthSchedule';

import { getDatabase, ref, onValue, child, update } from "firebase/database";
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);

  // user 데이터베이스에서 정보 받아오기
  const userRef = ref(getDatabase(), 'users');
  const YEAR = new Date().getFullYear();
  const [ userAge, setUserAge ] = useState('');
  const [ age, setAge ] = useState(0);

  // 무한 루프 방지를 위한 Hook
  useEffect(() => {
    if (user) {
      addAreaListener(user.uid)
    }
  }, []);

  // user 정보가 있을 시 이벤트 실행
  const addAreaListener = (userId) => {
    onValue(child(userRef, `${userId}`), (data) => {
      if (data.val() !== null) {
        const age = Math.floor((YEAR - Number(data.val().age))/10);

        setAge(age * 10);

        switch(age){
          case 0: case 1:
            setUserAge('childrenAndTeenagers');
            break;
          case 2: case 3:
            setUserAge('youngAdults');
            break;
          case 4: case 5:
            setUserAge('middleAged');
            break;
          default:
            setUserAge('seniors');
            break;
        }
      }
    })
  }

  return (
    <MainLayout isMain={true}>
      <MyHealthCondition userAge={userAge} age={age} />
      <HealthSchedule />
      <VaccinationAdvise />
      <MedicineInfo />
    </MainLayout>
  )
}

export default Home