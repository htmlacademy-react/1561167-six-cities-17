type LocationProps = {
  location: string;
  isLocationActive: boolean;
};

function LocationsItem({
  location,
  isLocationActive,
}: LocationProps): JSX.Element {
  const linkClassName = isLocationActive ? 'tabs__item--active' : '';
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${linkClassName}`}
        href="#"
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
