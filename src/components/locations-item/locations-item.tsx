type LocationProps = {
  location: string;
  isLocationActive?: boolean;
  className: string;
};

function LocationsItem({
  location,
  isLocationActive,
  className,
}: LocationProps): JSX.Element {
  const activeClassName = isLocationActive ? ' tabs__item--active' : '';
  return (
    <li className="locations__item">
      <a className={`${className}${activeClassName}`} href="#">
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
