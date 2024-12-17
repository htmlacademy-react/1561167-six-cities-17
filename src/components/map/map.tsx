import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import cn from 'classnames';
import { OfferType, ShortOfferType, TypesPageKeys } from '../../types/types';
import styles from './style.module.css';
import { Pin, TypesPage } from '../../const';
import useMap from './hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  typesPage: TypesPageKeys;
  offers: (OfferType | ShortOfferType)[];
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
  const classesMap = cn('map', {
    [`cities__map ${styles.mainwrapper}`]: typesPage === TypesPage.Main,
    [`offer__map ${styles.offerwrapper}`]: typesPage === TypesPage.Offer,
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
