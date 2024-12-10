import { ReactNode } from 'react';

type LocationsListProps = {
  children: ReactNode[];
};

function LocationsList({ children }: LocationsListProps): JSX.Element {
  return <ul className="locations__list tabs__list">{children}</ul>;
}

export { LocationsList };
