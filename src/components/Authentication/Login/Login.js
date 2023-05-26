import React, { useState } from 'react';
import AuthenticationLayout from '../../Layout/AuthenticationLayout';
import Lottie from 'react-lottie-player';

// 애니메이션 파일
import Logo from '../../DesignFile/Logo.json';
import PageImage from '../../DesignFile/Pageimage.json';

// 인증 관련 기능
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [ errorFromSubmit, setErrorFromSubmit ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ isPasswordShow , setIsPasswordShow ] = useState(false);

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

      // Firedase Login
      await signInWithEmailAndPassword(auth, data.userEmail, data.password);
      
      if(!auth.currentUser.emailVerified){
        alert('이메일 인증 후 로그인이 가능합니다');

        signOut(auth).then(() => {

        }).catch((error) => {
    
        })
      }
      
      setLoading(false); 
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
        <div className="lg:flex items-center space-x-16">
          <div className="flex items-center justify-center">
            <Lottie
              loop
              animationData={PageImage}
              play
              style={{ width: 500, height: 500 }}
            />
          </div>
          <div className="w-[38vw] mt-8 mx-auto px-16 py-8 rounded-lg">
            <div className="flex justify-center gap-4 h-10">
              <Lottie
                loop
                animationData={Logo}
                play
              />
              <h2 className="text-2xl font-bold text-gray-800 text-center leading-10">
                Health Sun
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-8 text-sm" >
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
              <div className="flex flex-col my-4">
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
                    {...register("password", { required: true })}
                  />
                  <button onClick={() => setIsPasswordShow(!isPasswordShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <PasswordShowBtn />
                  </button>
                </div>
                {errors.password && errors.password.type === "required" && <p className='text-[#DB8888] text-xs'>비밀번호를 입력바랍니다</p>}
              </div> 

              {errorFromSubmit && <p>{errorFromSubmit}</p>} 

              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  disabled={loading}
                  value={'login'}
                  className="w-full py-4 bg-[#DB8888] rounded-lg text-whit"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <div className="font-bold text-white">Sigin</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  <Link
                    href="#"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Recover password!
                  </Link>
                  <Link
                    to={'/register'}
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Singup!
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticationLayout>
  )
}

export default Login