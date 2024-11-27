import cn from 'classnames';
import { TypesPage } from '../../const';

type LocationLinkProps = {
  location: string;
  typesPage: string;
  isActive?: boolean;
};

function LocationsItemLink(props: LocationLinkProps): JSX.Element {
  const { location, typesPage, isActive } = props;
  const linkClasses = cn('locations__item-link', {
    ['tabs__item']: typesPage === TypesPage.Main,
    ['tabs__item--active']: isActive,
  });
  return (
    <a className={linkClasses} href="#">
      <span>{location}</span>
    </a>
  );
}

export default LocationsItemLink;
