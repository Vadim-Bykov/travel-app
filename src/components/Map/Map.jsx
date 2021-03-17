// import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { countryPositions } from '../../data/dataFront';
import fullScreenSvg from '../../assets/img/fullScreen.svg';
import exitFullScreenSvg from '../../assets/img/fullscreen_exit.svg';

const Map = ({ countryData, id, curLang }) => {
  const mapWrap = useRef(null);
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapWrap.current.requestFullscreen();
      setFullScreen((fullScreen) => !fullScreen);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen((fullScreen) => !fullScreen);
      }
    }
  };

  const {
    geoData: { layout, marker },
  } = countryData;

  return (
    <div className='leafletContainer' ref={mapWrap}>
      <img
        onClick={toggleFullscreen}
        className='fullScreen'
        src={fullScreen ? exitFullScreenSvg : fullScreenSvg}
        alt='fullScreen'
      />
      <MapContainer
        center={[countryPositions[id].latitude, countryPositions[id].longitude]}
        zoom={4}
        scrollWheelZoom={true}
        fullscreenControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[marker.latitude, marker.longitude]}>
          <Popup>{countryData.capital[curLang]}</Popup>
        </Marker>
        <GeoJSON attribution='&copy; credits due...' data={layout} />
      </MapContainer>
    </div>
  );
};

export default Map;
