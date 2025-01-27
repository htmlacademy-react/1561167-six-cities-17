import { memo, useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import cn from 'classnames';
import styles from './style.module.css';
import { Page, Pin } from '../../const';
import useMap from './hooks/use-map';
import { MapPointsListType } from '../../types/map';
import { useAppSelector } from '../../hooks';
import { selectCurrentPage } from '../../store/page/page-selectors';

type MapProps = {
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

const Map = memo((props: MapProps): JSX.Element => {
  const { points, activeCardId } = props;

  const page = useAppSelector(selectCurrentPage);

  const classesMap = cn('map', {
    [`cities__map ${styles.mainwrapper}`]: page === Page.Main,
    [`offer__map ${styles.offerwrapper}`]: page === Page.Offer,
  });
  const cityLocation = points[0].city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation, page === Page.Main);

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
  }, [map, points, activeCardId, cityLocation]);

  return <section ref={mapRef} className={classesMap}></section>;
});

Map.displayName = 'Map';

export { Map };
