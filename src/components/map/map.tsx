import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import cn from 'classnames';
import { MapPointsListType, TypesPageKeys } from '../../types/types';
import styles from './style.module.css';
import { Pin, TypesPage } from '../../const';
import useMap from './hooks/use-map';

type MapProps = {
  typesPage: TypesPageKeys;
  points: MapPointsListType;
  activeCardId: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: Pin.DefaultUrl,
  iconSize: Pin.Size,
  iconAnchor: Pin.Anchor,
});

const activeCustomIcon = new Icon({
  iconUrl: Pin.CurrentUrl,
  iconSize: Pin.Size,
  iconAnchor: Pin.Anchor,
});

function Map(props: MapProps): JSX.Element {
  const { points, activeCardId, typesPage } = props;
  const classesMap = cn('map', {
    [`cities__map ${styles.mainwrapper}`]: typesPage === TypesPage.Main,
    [`offer__map ${styles.offerwrapper}`]: typesPage === TypesPage.Offer,
  });
  const cityLocation = points[0].city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation, typesPage === TypesPage.Main);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      map.setView(
        [cityLocation.latitude, cityLocation.longitude],
        cityLocation.zoom
      );
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activeCardId !== null && point.id === activeCardId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activeCardId]);

  return <section ref={mapRef} className={classesMap}></section>;
}

export default Map;
