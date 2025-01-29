import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Page, Path } from '../../const';
import { CityKeys } from '../../types/cities';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCurrentPage } from '../../store/page/page-selectors';
import { getRandomCity } from './utils';
import { changeCity } from '../../store/city/city-slice';

type LocationsItemLinkProps = {
  city?: CityKeys;
  isActive?: boolean;
};

const LocationsItemLink = memo(
  ({ city, isActive = false }: LocationsItemLinkProps): JSX.Element => {
    const page = useAppSelector(selectCurrentPage);
    const dispatch = useAppDispatch();

    const linkClasses = cn('locations__item-link', {
      ['tabs__item']: page === Page.Main,
      ['tabs__item--active']: isActive,
    });

    if (!city) {
      city = getRandomCity();
      dispatch(changeCity(city));
    }

    return (
      <Link className={linkClasses} to={Path.Root}>
        <span>{city}</span>
      </Link>
    );
  }
);

LocationsItemLink.displayName = 'LocationsItemLink';

export { LocationsItemLink };
