// src/components/MapComponent.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '300px',
  borderRadius: '8px'
};

// Receive a single 'doctor' prop
const MapComponent = ({ doctor }) => {
  // Center the map on this doctor
  const mapCenter = {
    lat: doctor.location.latitude,
    lng: doctor.location.longitude
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBZwaKa71uETzR3g5P0oXbDqH1ecGuuim0" // Make sure your key is here
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={15} // Zoom in close
      >
        {/* Show only the one marker */}
        <Marker
          key={doctor.id}
          position={mapCenter}
          title={doctor.name}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);