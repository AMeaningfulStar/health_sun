import React, { useState } from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';
import Lottie from 'react-lottie-player';

import PageImage from '../../DesignFile/Pageimage.json';

import { Link } from 'react-router-dom';


const Register = () => {
  const [ isShow , setIsShow ] = useState(false);
  const [ agreeCheck , setAgreeCheck ] = useState(false);

  // 회원 가입 시 저장되는 고객 정보
  const [signupData, setSignupData] = useState({
    userEmail: "",
    password: "",
    passwordConfirmation: "",
    userName: ""
  });

  // 입력된 정보 검증
  const verification = () => {
    // 정규식
    const emailVerification = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const passwordVerification = /^[A-Za-z0-9]{6,12}$/;

    if (signupData.userName === '') {
      alert('이름을 작성해주세요');
      return false;
    }

    if (signupData.userEmail.match(emailVerification) === null) {
      alert('올바른 이메일을 작성해주세요');
      return false;
    }

    if (signupData.password.match(passwordVerification) === null) {
      alert(`하나 이상의 문자와 하나의 숫자를 포함한\n최소 8자 이상의 비밀번호를 작성해주세요`);
      return false;
    }

    if (signupData.password !== signupData.passwordConfirmation) {
      alert(`비밀번호가 다릅니다\n다시 입력해주세요`);
      return false;
    }

    if (agreeCheck === false) {
      alert(`약관 및 개인 정보 정책에 동의해주세요`);
      return false;
    }

    return true;
  }

  const handleChange = (userData) => {
    setSignupData({
      ...signupData,
      [userData.target.name]: userData.target.value,
    })
  }

  const handleSubmit = async (userData) => {
    userData.preventDefault()
    try{
      if(verification()){
        // await createUserWithEmailAndPassword(auth, signupData.userEmail, signupData.password);

        alert('회원 가입을 축하드립니다.');
        // history.replaceState({}, null, location.pathname);
      }
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode: ' + errorCode + '/ errorMessage: ' + errorMessage);
      alert('회원 가입을 실패했습니다.')
    }
  }
  
  const PasswordShowBtn = () => {
    if(isShow){
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      )
    }

    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
        </path>
      </svg>
    )
  }
  
  return (
    <AuthenticationLayout>
      <div className="flex flex-col text-left justify-center items-center" style={{ height: '100%' }}>
        <div class="lg:flex items-center space-x-16">
          <div className="flex items-center justify-center">
            <Lottie
              loop
              animationData={PageImage}
              play
              style={{ width: 500, height: 500 }}
            />
          </div>
          <div class="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              회원 가입
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              이미 계정이 있으신가요?
              <Link to={'/'} className="text-[#dfaeae] hover:text-[#DB8888] hover:underline" title="Sign In">
                로그인 하러 가기
              </Link>
            </p>
            <form className="my-8 text-sm" onSubmit={ handleSubmit }>
              <div className="flex flex-col my-4">
                <label for="name" className="text-gray-700">
                  이름
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  defaultValue={signupData.userName}
                  onChange={handleChange}
                  placeholder="Please insert your name"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                />
              </div>
              <div className="flex flex-col my-4">
                <label for="email" className="text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  defaultValue={signupData.userEmail}
                  onChange={handleChange}
                  placeholder="Please insert your email"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                />
              </div>
              <div className="flex flex-col my-4">
                <label for="password" className="text-gray-700">
                  비밀번호
                </label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={ isShow ? 'text': 'password'}
                    name="password"
                    id="password"
                    defaultValue={signupData.password}
                    onChange={handleChange}
                    placeholder="Please insert your password"
                    className="flex-1 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                  />
                  <button onClick={() => setIsShow(!isShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <PasswordShowBtn />
                  </button>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <label for="password" className="text-gray-700">
                  비밀번호 확인
                </label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={ isShow ? 'text': 'password'}
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    defaultValue={signupData.passwordConfirmation}
                    onChange={handleChange}
                    placeholder="Please insert your password again"
                    className="flex-1 border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                  />
                  <button onClick={() => setIsShow(!isShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <PasswordShowBtn />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  onChange={()=>setAgreeCheck(!agreeCheck)}
                  className="mr-2 accent-white text-sm font-medium text-gray-900 dark:text-gray-300"
                />
                <label htmlFor="remember_me" className="text-gray-700">
                  <a href="#" className="text-amber-800 hover:text-amber-600 hover:underline">약관</a> 및 <a href="#" className="text-amber-800 hover:text-amber-600 hover:underline">개인 정보 보호</a> 정책에 동의합니다.
                </label>
              </div>         
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#DB8888] rounded-lg text-white"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Sign up</div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticationLayout>
  )
}

export default Register