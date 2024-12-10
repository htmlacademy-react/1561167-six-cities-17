import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Path, TypesPage } from '../../const';
import { CityProps } from '../../types/types';

function LocationsItemLink(props: CityProps): JSX.Element {
  const { city, typesPage, isActive = false } = props;
  const linkClasses = cn('locations__item-link', {
    ['tabs__item']: typesPage === TypesPage.Main,
    ['tabs__item--active']: isActive,
  });
  return (
    <Link className={linkClasses} to={Path.Root}>
      <span>{city}</span>
    </Link>
  );
}

export default LocationsItemLink;
