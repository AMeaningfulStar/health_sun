import React, { useState, useRef, useEffect } from 'react';
import ReactModal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';

import { useSelector, useDispatch } from "react-redux";
import { auth } from '../../../firebase';
import { updatePassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { getDatabase, ref, onValue, child, update } from "firebase/database";

ReactModal.setAppElement('#root'); // App 요소를 설정

const MyPage = ({ isShow, setIsShow }) => {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userArea, setUserArea] = useState('');

  const password = useRef();
  password.current = watch("password");

  const user = useSelector((state) => state.user.currentUser);

  // user 데이터베이스에서 area 정보 받아오기
  const userRef = ref(getDatabase(), 'users');

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
        setUserArea(data.val().area)
      } else {
        alert('정보를 불러오지 못했습니다')
      }
    })
  }

  // 주소 찾기 팝업
  const scriptURL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptURL);

  const handleComplete = (data) => {
    setUserArea(data.address);
  }

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  // 비밀번호 입력값 노출에 대한 이벤트 함수
  const PasswordShowBtn = () => {
    if (isPasswordShow) {
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
    const user = auth.currentUser;

    try{
      setLoading(true);

      await updatePassword(auth.currentUser, data.password);
      
      update(ref(getDatabase(), `users/${ user.uid }`), { area: data.userArea })

      setLoading(false);
      alert('정상적으로 변경되었습니다');
      setIsShow(false)
    }
    catch(error){
      // 회원가입 에러 발생 시 에러 문구 출력
      setErrorFromSubmit(error.message)

      // 에러 문구 5초 노출 후 사라짐
      setTimeout(() => {
        setErrorFromSubmit("")
      }, 5000);
    }
  }

  return (
    <ReactModal
      isOpen={isShow}
      onRequestClose={() => setIsShow(false)}
      className='absolute w-[35vw] h-[80vh] left-[34vw] top-[10vh] rounded-md bg-[#EEE6E2]'
      appElement={document.getElementById('root')}
    >
      <div className='absolute left-[1.5vw] top-[2vh] flex flex-row gap-[24.5vw] items-center'>
        <p className='text-[20px] text-[#707070] font-bold'>나의 프로필</p>
        <button>
          <AiOutlineClose className='text-[23px] text-[#707070]' onClick={() => setIsShow(false)} />
        </button>
      </div>
      <div className='absolute w-[33vw] h-[71vh] left-[1vw] top-[7vh] rounded-md bg-[#FFFFFF] border'>
        <form className="absolute w-[30vw] left-[1.5vw] mb-9 mt-5 text-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-1 mb-5">
            <p className="text-[16px] mb-1 font-semibold ml-1 text-gray-700">
              이름
            </p>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
            />
          </div>
          <div className="flex flex-col mt-1 mb-5">
            <p className="text-[16px] mb-1 font-semibold ml-1 text-gray-700 flex flex-row gap-1">
              주소
              {errors.userArea && <p className='text-[#DB8888] text-xs'>주소를 입력바랍니다</p>}
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
          </div>
          <div className="flex flex-col mt-1 mb-5">
            <p className="text-[16px] mb-1 font-semibold ml-1 text-gray-700">
              Email
            </p>
            <input
              type="email"
              name="userEmail"
              value={user.email}
              readOnly
              className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DB8888] focus:shadow-lg bg-white text-black"
            />
          </div>
          <div className="flex flex-col mt-1 mb-5">
            <p className="text-[16px] font-semibold ml-1 text-gray-700 flex flex-row gap-1">
              비밀번호
              {errors.password && errors.password.type === 'pattern' && <p className='text-[#DB8888] text-xs'>하나 이상의 문자와 하나 이상의 숫자를 포함하여 6자 이상 입력바랍니다</p>}
              {errors.password && errors.password.type === "required" && <p className='text-[#DB8888] text-xs'>비밀번호를 입력바랍니다</p>}
              {errors.password && errors.password.type === "minLength" && <p className='text-[#DB8888] text-xs'>비밀번호의 길이는 6자 이상이어야 합니다</p>}
            </p>
            <div className="relative flex items-center mt-2">
              <input
                type={isPasswordShow ? 'text' : 'password'}
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
          </div>
          <div className="flex flex-col mt-1 mb-5">
            <p className="text-[16px] font-semibold ml-1 text-gray-700 flex flex-row gap-1">
              비밀번호 확인
              {errors.password_confirm && errors.password_confirm.type === "required" && <p className='text-[#DB8888] text-xs'>비밀번호 확인을 입력바랍니다</p>}
              {errors.password_confirm && errors.password_confirm.type === "validate" && <p className='text-[#DB8888] text-xs'>비밀번호가 일치하지 않습니다</p>}
            </p>
            <div className="relative flex items-center mt-2">
              <input
                type={isPasswordShow ? 'text' : 'password'}
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
          </div>
          {errorFromSubmit && <p>{errorFromSubmit}</p>}
          <div id="button" className="flex flex-col w-full my-5">
            <button
              type="submit"
              value={'submit'}
              disabled={loading}
              className="w-full py-3 bg-[#DB8888] h-[6vh] rounded-lg text-white"
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
                <div className="font-bold">변경하기</div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  )
}

export default MyPage