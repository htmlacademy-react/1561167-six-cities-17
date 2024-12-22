import { CityProps } from '../../../../types/types';

type OffersEmptyProps = Pick<CityProps, 'city'>;

function OffersEmpty({ city }: OffersEmptyProps): JSX.Element {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        We could not find any property available at the moment in {city}
      </p>
    </div>
  );
}

export { OffersEmpty };
