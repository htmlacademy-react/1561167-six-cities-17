import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Page, Path } from '../../const';
import { CityKeys } from '../../types/cities';
import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { selectCurrentPage } from '../../store/page/page-selectors';
import { getRandomCity } from './utils';

type LocationsItemLinkProps = {
  city?: CityKeys;
  isActive?: boolean;
};

const LocationsItemLink = memo(
  ({ city, isActive = false }: LocationsItemLinkProps): JSX.Element => {
    const page = useAppSelector(selectCurrentPage);

    const linkClasses = cn('locations__item-link', {
      ['tabs__item']: page === Page.Main,
      ['tabs__item--active']: isActive,
    });

    return (
      <Link className={linkClasses} to={Path.Root}>
        <span>{city || getRandomCity()}</span>
      </Link>
    );
  }
);

LocationsItemLink.displayName = 'LocationsItemLink';

export { LocationsItemLink };
