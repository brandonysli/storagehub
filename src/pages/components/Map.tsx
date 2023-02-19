// https://github.com/google-map-react/google-map-react


// make a Map component that takes in latitude and longitude props in addition to other stuff to make a resuable map component

import React from 'react';
import { GoogleMap,LoadScript,OverlayView } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};



type Coords = {
  lat:number;
  lng:number;
}

const Map = (coords:Coords) => {
  const center = {
    lat: coords.lat,
    lng: coords.lng
  };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDw605EseQ7XN-qSd0cSfbOh_7crYUS2Os"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )

}

export default React.memo(Map);