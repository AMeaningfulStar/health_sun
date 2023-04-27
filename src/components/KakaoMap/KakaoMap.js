import React, { useEffect } from 'react';


const KakaoMap = ({ children }) => {
  // 카카오 맵 로드를 위한 함수
  const loadKakaoMapScript = (callback) => {
    if (window.kakao && window.kakao.maps) {
      // 이미 카카오 맵 SDK가 로드되어 있는 경우, 바로 콜백 함수 실행
      callback();
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=d6f5de19511a2fb6913575e9bad5ad23&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      // 카카오 맵 SDK 로드가 완료된 후에 콜백 함수 실행
      window.kakao.maps.load(() => {
        callback();
      });
    };
  };

  useEffect(() => {
    // 카카오 맵 SDK 로드 및 맵 생성
    loadKakaoMapScript(() => {
      const map = new window.kakao.maps.Map(document.getElementById('map'), {
        // 맵 옵션 설정
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3,
      });
      // ... 이하 생략
    });
  }, []);

  return (
    <div id="map" className='w-[100%] h-[100%] rounded-lg'>
      { children }
    </div>
  )
}

export default KakaoMap;