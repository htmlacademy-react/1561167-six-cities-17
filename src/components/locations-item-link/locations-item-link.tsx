import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Path, TypesPage } from '../../const';
import { LocationProps } from '../../types/types';

function LocationsItemLink(props: LocationProps): JSX.Element {
  const { location, typesPage, isActive = false } = props;
  const linkClasses = cn('locations__item-link', {
    ['tabs__item']: typesPage === TypesPage.Main,
    ['tabs__item--active']: isActive,
  });
  return (
    <Link className={linkClasses} to={Path.Root}>
      <span>{location}</span>
    </Link>
  );
}

export default LocationsItemLink;
