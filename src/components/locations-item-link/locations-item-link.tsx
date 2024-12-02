import cn from 'classnames';
import { Path, TypesPage } from '../../const';
import { CityType, TypesPageEnum } from '../../types/types';
import { Link } from 'react-router-dom';

type LocationLinkProps = {
  location: CityType;
  typesPage: TypesPageEnum;
  isActive?: boolean;
};

function LocationsItemLink(props: LocationLinkProps): JSX.Element {
  const { location, typesPage, isActive } = props;
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
