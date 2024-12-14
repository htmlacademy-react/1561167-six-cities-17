import cn from 'classnames';
import { ShortOfferListType, TypesPageEnum } from '../../types/types';
import styles from './style.module.css';
import { Pin, TypesPage } from '../../const';
import { Icon, layerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from './hooks/use-map';

type MapProps = {
  typesPage: TypesPageEnum;
  offers: ShortOfferListType;
  activeCardId: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: Pin.DefaultUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: Pin.CurrentUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { offers, activeCardId, typesPage } = props;
  const classesMap = cn(`map ${styles.wrapper}`, {
    ['cities__map']: typesPage === TypesPage.Main,
    ['offer__map']: typesPage === TypesPage.Offer,
  });
  const cityLocation = offers[0].city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeCardId !== null && offer.id === activeCardId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  return <section ref={mapRef} className={classesMap}></section>;
}

export default Map;
