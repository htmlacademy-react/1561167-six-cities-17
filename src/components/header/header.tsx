import { ReactNode } from 'react';
import Logo from '../logo/logo';
import { TypesPageEnum } from '../../types/types';

type NavProps = {
  typesPage: TypesPageEnum;
  children?: ReactNode;
};

function Header({ typesPage, children }: NavProps): JSX.Element {
  return (
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
  );
}

export default Header;
