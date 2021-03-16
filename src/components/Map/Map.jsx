import React, { Fragment, useRef } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default function Map() {

    const mapWrap = useRef(null);

    function openFullscreen() {
        if (mapWrap.current.requestFullscreen) {
            mapWrap.current.requestFullscreen();
        }
    }

    // Москва [55.751244, 37.618423]
    // Минск [53.904541, 27.561523]
    // London [51.507351, -0.127758]
    // Berlin [52.531677, 13.381777]
    // Paris [48.876965, 2.295138]
    // Пекин [39.916668, 116.383331]
    // Вашингтон [38.889248, -77.050636]
    // Токио [35.652832, 139.839478]



    return (
        <Fragment>
            <button onClick={openFullscreen}>Во весь экран</button>
            <div className="leafletcontainer" ref={mapWrap} >
                <MapContainer center={[38.889248, -77.050636]} zoom={5} scrollWheelZoom={true} fullscreenControl={true}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[38.889248, -77.050636]}>
                        <Popup>
                            Москва
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Fragment>
    )
};