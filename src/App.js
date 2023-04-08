import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Home from './components/PageComponent/Home/Home';
import MedicalExamination from './components/PageComponent/Medical_Examination/MedicalExamination';
import Medicine from './components/PageComponent/Medicine/Medicine';
import Vaccination from './components/PageComponent/Vaccination/Vaccination';
import Position from './components/PageComponent/Position/Position';
import MyPage from './components/PageComponent/MyPage/MyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/medicalExamination' element={<MedicalExamination />} />
      <Route path='/medicine' element={<Medicine />} />
      <Route path='/vaccination' element={<Vaccination />} />
      <Route path='/position' element={<Position />} />
      <Route path='/myPage' element={<MyPage />} />
    </Routes>
  );
}

export default App;
