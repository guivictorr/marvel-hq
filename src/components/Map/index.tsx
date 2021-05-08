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
  markerLat: number;
  markerLong: number;
};

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState<MaerkerPositionProps>({
    markerLat: 0,
    markerLong: 0,
  });
  const [viewport, setViewport] = useState({
    latitude: -11,
    longitude: -59,
  });

  const handleMapClick = (event: MapEvent) => {
    const [long, lat] = event.lngLat;
    setMarkerPosition({ markerLat: lat, markerLong: long });
  };

  const successHandler = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setViewport({ latitude, longitude });
  };

  const errorHandler = (error: GeolocationPositionError) => {
    console.error(error.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
      mapStyle="mapbox://styles/guilhermevictor/cknvl9gs00gc317n15mws0vx8"
      onViewportChange={(viewport: MapViewport) => {
        setViewport(viewport);
      }}
      onClick={handleMapClick}
      width="100%"
      height={280}
      zoom={13}
    >
      <Marker
        latitude={markerPosition.markerLat}
        longitude={markerPosition.markerLong}
      >
        <img src="pin.svg" alt="Marcador" />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
