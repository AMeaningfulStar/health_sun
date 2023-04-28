import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import MyHealthCondition from './MyHealthCondition';
import MedicineInfo from './MedicineInfo';
import VaccinationAdvise from './VaccinationAdvise';
import HealthSchedule from './HealthSchedule';

const Home = () => {
  return (
    <MainLayout isMain={true}>
      <MyHealthCondition />
      <HealthSchedule />
      <VaccinationAdvise />
      <MedicineInfo />
    </MainLayout>
  )
}

export default Home