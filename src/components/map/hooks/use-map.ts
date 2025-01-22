import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Layer } from '../../../const';
import 'leaflet/dist/leaflet.css';
import { LocationType } from '../../../types/offer';

type MapRefType = MutableRefObject<HTMLElement | null>;

function useMap(
  mapRef: MapRefType,
  location: LocationType,
  isZoomChange: boolean
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
        zoom: location.zoom,
        scrollWheelZoom: isZoomChange,
      });

      const layer = new TileLayer(Layer.Url, {
        attribution: Layer.Attribution,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location, isZoomChange]);

  return map;
}

export default useMap;
