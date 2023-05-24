import React, { useState, useRef } from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';
import Lottie from 'react-lottie-player';
import { useNavigate } from "react-router-dom";
import PageImage from '../../DesignFile/Pageimage.json';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import md5 from 'md5';

import { useDaumPostcodePopup } from 'react-daum-postcode'

const Register = () => {
  const navigate = useNavigate(); // 강제 경로 이동
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const [ errorFromSubmit, setErrorFromSubmit ] = useState("");
  const [ isPasswordShow , setIsPasswordShow ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ userArea, setUserArea ] = useState('');

  // 주소 찾기 팝업
  const scriptURL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptURL);

  const handleComplete = (data) => {
    setUserArea(data.address);
  }

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const password = useRef();
  password.current = watch("password");
  
  // 비밀번호 입력값 노출에 대한 이벤트 함수
  const PasswordShowBtn = () => {
    if(isPasswordShow){
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      )
    }

    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
        </path>
      </svg>
    )
  }

  const onSubmit = async(data) => {
    try {
      setLoading(true);
      console.log(data)

      let createdUser = await createUserWithEmailAndPassword(auth, data.userEmail, data.password);
      
      await sendEmailVerification(auth.currentUser);
      
      await updateProfile(auth.currentUser, {
        displayName: data.userName,
        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,
        area: userArea
      })

      //Firebase 데이터베이스에 저장해주기
      // 데이터베이스(getDatabase()) 주소(ref())안에 해당 경로(`users/${ createdUser.user.uid }`)에 데이터를 저장(set())한다.
      set(ref(getDatabase(), `users/${ createdUser.user.uid }`),{
        name: createdUser.user.displayName,
        Image: createdUser.user.photoURL,
        area: userArea
      })

      setLoading(false);
      navigate("/");
    }
    catch (error) {
      // 회원가입 에러 발생 시 에러 문구 출력
      setErrorFromSubmit(error.message)

      // 에러 문구 5초 노출 후 사라짐
      setTimeout(() => {
        setErrorFromSubmit("")
      }, 5000);
    }
  }
  
  return (
    <AuthenticationLayout>
      <div className="flex flex-col text-left justify-center items-center" style={{ height: '100%' }}>
        <div className="flex items-center space-x-16">
          <div className="flex items-center justify-center">
            <Lottie
              loop
              animationData={PageImage}
              play
              style={{ width: 500, height: 500 }}
            />
          </div>
          <div className="w-[38vw] mt-8 mx-auto px-16 py-8 rounded-lg">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              회원 가입
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              이미 계정이 있으신가요?
              <Link to={'/'} className="text-[#dfaeae] hover:text-[#DB8888] hover:underline" title="Sign In">
                로그인 하러 가기
              </Link>
            </p>
            <form className="mb-9 mt-5 text-sm" onSubmit={ handleSubmit(onSubmit) }>
              <div className="flex flex-col my-1">
                <p className="text-gray-700">
                  이름
                </p>
                <input
                  type="text"
                  name="userName"
                  placeholder="Please insert your name"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                  {...register("userName", { required: true, maxLength: 10 })}
                />
                {errors.userName && errors.userName.type === "required" && <p className='text-[#DB8888] text-xs'>이름을 입력바랍니다</p>}
                {errors.userName && errors.userName.type === "maxLength" && <p className='text-[#DB8888] text-xs'>입력할 수 있는 최대값을 초과했습니다</p>}
              </div>
              <div className="flex flex-col my-1">
                <p className="text-gray-700">
                  주소
                </p>
                <input
                  name="userArea"
                  placeholder="Please insert your area"
                  onClick={handleClick}
                  value={userArea}
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 bg-white text-black"
                  {...register("userArea", { required: true })}
                  readOnly
                />
                {errors.userArea && <p className='text-[#DB8888] text-xs'>주소를 입력바랍니다</p>}
              </div>
              <div className="flex flex-col my-1">
                <p className="text-gray-700">
                  Email
                </p>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Please insert your email"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                  {...register("userEmail", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.userEmail && <p className='text-[#DB8888] text-xs'>이메일을 입력바랍니다</p>}
              </div> 
              <div className="flex flex-col my-1">
                <p className="text-gray-700">
                  비밀번호
                </p>
                <div className="relative flex items-center mt-2">
                  <input
                    type={ isPasswordShow ? 'text': 'password'}
                    name="password"
                    id="password"
                    placeholder="Please insert your password"
                    className="flex-1 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                    {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z0-9]{6,12}$/ })}
                  />
                  <button onClick={() => setIsPasswordShow(!isPasswordShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <PasswordShowBtn />
                  </button>
                </div>
                {errors.password && errors.password.type === 'pattern' && <p className='text-[#DB8888] text-xs'>하나 이상의 문자와 하나 이상의 숫자를 포함하여 6자 이상 입력바랍니다</p>}
                {errors.password && errors.password.type === "required" && <p className='text-[#DB8888] text-xs'>비밀번호를 입력바랍니다</p>}
                {errors.password && errors.password.type === "minLength" && <p className='text-[#DB8888] text-xs'>비밀번호의 길이는 6자 이상이어야 합니다</p>}
              </div>
              <div className="flex flex-col my-1">
                <p className="text-gray-700">
                  비밀번호 확인
                </p>
                <div className="relative flex items-center mt-2">
                  <input
                    type={ isPasswordShow ? 'text': 'password'}
                    name="password_confirm"
                    placeholder="Please insert your password again"
                    className="flex-1 border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
                    {...register("password_confirm", {
                      required: true,
                      validate: (value) =>
                        value === password.current
                      })
                    }
                  />
                  <button onClick={() => setIsPasswordShow(!isPasswordShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <PasswordShowBtn />
                  </button>
                </div>
                {errors.password_confirm && errors.password_confirm.type === "required" && <p className='text-[#DB8888] text-xs'>비밀번호 확인을 입력바랍니다</p>}
                {errors.password_confirm && errors.password_confirm.type === "validate" && <p className='text-[#DB8888] text-xs'>비밀번호가 일치하지 않습니다</p>}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  className="mr-2 accent-white text-sm font-medium text-gray-900 dark:text-gray-300"
                  {...register("agree", { required: true })}
                />
                <p htmlFor="remember_me" className="text-gray-700">
                  <Link className="text-amber-800 hover:text-amber-600 hover:underline">약관</Link> 및 <Link className="text-amber-800 hover:text-amber-600 hover:underline">개인 정보 보호</Link> 정책에 동의합니다.
                </p>
              </div>
              {errors.agree && <p className='text-[#DB8888] text-xs'>약관 및 개인 정보 보호 정책에 동의바랍니다</p>}
              {errorFromSubmit && <p>{errorFromSubmit}</p>} 

              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  value={'submit'}
                  disabled={loading}
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