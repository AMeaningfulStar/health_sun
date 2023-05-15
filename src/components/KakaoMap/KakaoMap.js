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
    loadKakaoMapScript(() => {
      const map = new window.kakao.maps.Map(document.getElementById('map'), {
        center: new window.kakao.maps.LatLng(37.88747039336736, 127.73836119962642),
        level: 3,
      });

      // 주소-좌표 변환 객체를 생성합니다
      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

      // 줌 컨트롤 생성 및 추가
      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      // 마커 이미지 정보
      var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소입니다    
      var imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
      var imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption); // 마커의 이미지 정보를 가지고 있는 마커이미지를 생성합니다

      // 마커 위치 정보
      var markerPosition = new window.kakao.maps.LatLng(37.88747039336736, 127.73836119962642); // 마커가 표시될 위치입니다

      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        position: markerPosition, 
        image: markerImage // 마커이미지 설정 
      });

      // 마커를 지도에 표시
      marker.setMap(map);


      // 지도를 표시하는 div 크기를 변경하는 함수
      const resizeMap = () => {
        const mapContainer = document.getElementById('map');
        mapContainer.style.width = '100%';
        mapContainer.style.height = '100%';
      };

      // relayout 함수
      const relayout = () => {
        // 지도를 표시하는 div 크기를 변경한 이후 map.relayout 함수를 호출
        map.relayout();
      };

      // 윈도우 리사이즈 이벤트 발생 시 relayout 함수 호출
      window.addEventListener('resize', relayout);

      resizeMap(); // resizeMap 함수 호출

      // 이동할 위도, 경도를 생성하는 함수
      const panTo = () => {
        const moveLatLon = new window.kakao.maps.LatLng(37.88747039336736, 127.73836119962643);
        map.panTo(moveLatLon);
      };

      // 함수 실행을 위한 버튼 클릭 이벤트 핸들러
      document.getElementById('panToButton').addEventListener('click', panTo);
    });
  }, []);

  return (
    <div id="map" className='w-[100%] h-[100%]'>
      { children }
      <button id="panToButton">Pan To</button>
    </div>
  )
}

export default KakaoMap;