import { memo, ReactNode } from 'react';
import { Logo } from '../logo/logo';
import { TypesPageKeys } from '../../types/types';

type NavProps = {
  typesPage: TypesPageKeys;
  children?: ReactNode;
};

const Header = memo(
  ({ typesPage, children }: NavProps): JSX.Element => (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo typesPage={typesPage} />
          </div>
          {children}
        </div>
      </div>
    </header>
  )
);

Header.displayName = 'Hearder';

export { Header };
