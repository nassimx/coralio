import React from 'react';
import GoogleMapReact from 'google-map-react';

import './map.css';

const Map = ({ location, zoomLevel }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: 'Hello World!',
    });
    return marker;
  };

  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: false,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }],
        },
      ],
    };
  };
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAdwGTevIwDrKnEImMe3FeLFOpsdEC-DKQ' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        options={getMapOptions}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
