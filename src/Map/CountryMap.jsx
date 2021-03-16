// import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { countryPositions } from '../data/dataFront';
import geoData from '../data/geoData/belarus.geo.json';

const Map  = ({id}) => {
  const mapWrap = useRef(null);

  const openFullscreen = () => {
    if (mapWrap.current.requestFullscreen) {
      mapWrap.current.requestFullscreen();
    }
  };

  return (
    <>
      <button onClick={openFullscreen}>Во весь экран</button>
      <div className='leafletcontainer' ref={mapWrap}>
        <MapContainer
          center={[countryPositions[id].latitude, countryPositions[id].longitude]}
          zoom={5}
          scrollWheelZoom={true}
          fullscreenControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[countryPositions[id].latitude, countryPositions[id].longitude]}>
            <Popup>Москва</Popup>
          </Marker>
          <GeoJSON attribution="&copy; credits due..." data={geoData} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

// var map = L.map('map');
// map.createPane('labels');

// map.getPane('labels').style.zIndex = 650;

// map.getPane('labels').style.pointerEvents = 'none';


// var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
//         attribution: '©OpenStreetMap, ©CartoDB'
// }).addTo(map);

// var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
//         attribution: '©OpenStreetMap, ©CartoDB',
//         pane: 'labels'
// }).addTo(map);

// var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);

// geojson.eachLayer(function (layer) {
//   layer.bindPopup(layer.feature.properties.name);
// });

// map.fitBounds(geojson.getBounds());