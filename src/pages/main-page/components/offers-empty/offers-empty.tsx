import { useAppSelector } from '../../../../hooks';
import { selectCurrentCity } from '../../../../store/city/city-selectors';

function OffersEmpty(): JSX.Element {
  const currentCity = useAppSelector(selectCurrentCity);

  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        We could not find any property available at the moment in {currentCity}
      </p>
    </div>
  );
}

export { OffersEmpty };
