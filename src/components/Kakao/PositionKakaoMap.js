import React, { useEffect } from 'react';
import Hos from '../DesignFile/Hospital.png';
import Med from '../DesignFile/medicine.png';

const PositionKakaoMap = ({ hospitals }) => {
  const loadKakaoMapScript = (callback) => {
    if (window.kakao && window.kakao.maps) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=d6f5de19511a2fb6913575e9bad5ad23&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        callback();
      });
    };
  };

  useEffect(() => {
    loadKakaoMapScript(() => {
      const map = new window.kakao.maps.Map(document.getElementById('map'), {
        center: new window.kakao.maps.LatLng(37.88241408999139, 127.74761455997918),
        level: 6,
      });

      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const markerImages = {
        의원: new window.kakao.maps.MarkerImage(Hos, new window.kakao.maps.Size(64, 69), {
          offset: new window.kakao.maps.Point(27, 69),
        }),
        치과의원: new window.kakao.maps.MarkerImage(Med, new window.kakao.maps.Size(64, 69), {
          offset: new window.kakao.maps.Point(27, 69),
        }),
      };

      hospitals.forEach((hospital) => {
        const markerPosition = new window.kakao.maps.LatLng(hospital.cxVl, hospital.cyVl);
        const markerImage = markerImages[hospital.ykindnm] || markerImages.의원; // Select marker image based on hospital type
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        marker.setMap(map);
      });

      const resizeMap = () => {
        const mapContainer = document.getElementById('map');
        mapContainer.style.width = '100%';
        mapContainer.style.height = '100%';
      };

      const relayout = () => {
        map.relayout();
      };

      window.addEventListener('resize', relayout);

      resizeMap();

      const panTo = () => {
        const moveLatLon = new window.kakao.maps.LatLng(37.88747039336736, 127.73836119962643);
        map.panTo(moveLatLon);
      };

      document.getElementById('panToButton').addEventListener('click', panTo);
    });
  }, [hospitals]);

  return (
    <div id="map" className="w-[100%] h-[100%]">
      <button id="panToButton">Pan To</button>
    </div>
  );
};

export default PositionKakaoMap;