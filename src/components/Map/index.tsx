import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, MapEvent } from 'react-map-gl';

type MapViewport = {
  latitude: number;
  longitude: number;
  width: string;
  height: number;
  zoom: number;
};

type MaerkerPositionProps = {
  latitude: number;
  longitude: number;
};

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState<MaerkerPositionProps>({
    latitude: 0,
    longitude: 0,
  });
  const [viewport, setViewport] = useState({
    latitude: -23,
    longitude: -52,
    width: '100%',
    height: 280,
    zoom: 8,
  });

  const handleMapClick = (event: MapEvent) => {
    const [long, lat] = event.lngLat;
    setMarkerPosition({ latitude: lat, longitude: long });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords;
        setViewport({ ...viewport, latitude, longitude });
      });
    }
  }, [viewport]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
      mapStyle="mapbox://styles/guilhermevictor/cknvl9gs00gc317n15mws0vx8"
      onViewportChange={(viewport: MapViewport) => {
        setViewport(viewport);
      }}
      onClick={handleMapClick}
    >
      <Marker
        latitude={markerPosition.latitude}
        longitude={markerPosition.longitude}
      >
        <img src="pin.svg" alt="Marcador" />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
