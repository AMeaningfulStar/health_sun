import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './redux/actions/user_action';

import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Home from './components/PageComponent/Home/Home';
import MedicalExamination from './components/PageComponent/Medical_Examination/MedicalExamination';
import Medicine from './components/PageComponent/Medicine/Medicine';
import Vaccination from './components/PageComponent/Vaccination/Vaccination';
import Position from './components/PageComponent/Position/Position';
import MyPage from './components/PageComponent/MyPage/MyPage';
import Supplements from './components/PageComponent/Supplements/Supplements';

function App(props) {
  const navigate = useNavigate(); // 강제 경로 이동
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");

        // 로그인한 user 정보를 redux에 저장
        dispatch(setUser(user));
        if(!auth.currentUser.emailVerified){
          alert('이메일 인증 후 로그인이 가능합니다');
  
          navigate("/");

          // 로그아웃 시 저장된 user 정보를 redux에서 지움
          dispatch(clearUser());
        }

      } else {
        navigate("/");

        // 로그아웃 시 저장된 user 정보를 redux에서 지움
        dispatch(clearUser());
        // User is signed out
        // ...
      }
    });
  }, []);

  if(isLoading) {
    return <div>...Loading</div>
  }
  else{
    return (
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/medicalExamination' element={<MedicalExamination />} />
      <Route path='/medicine' element={<Medicine />} />
      <Route path='/vaccination' element={<Vaccination />} />
      <Route path='/supplements' element={<Supplements />} />
      <Route path='/position' element={<Position />} />
      <Route path='/myPage' element={<MyPage />} />
    </Routes>
    );
  }
}

export default App;
