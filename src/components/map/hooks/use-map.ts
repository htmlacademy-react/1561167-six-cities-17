import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { LocationType } from '../../../types/types';
import { Layer } from '../../../const';

type TMapRef=MutableRefObject<HTMLElement | null>;

function useMap(
  mapRef: TMapRef,
  location: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location?.zoom,
      });

      const layer = new TileLayer(Layer.Url, {
        attribution: Layer.Attribution,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

export default useMap;
