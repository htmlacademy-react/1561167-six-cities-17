import { memo, ReactNode } from 'react';
import { Logo } from '../logo/logo';

type NavProps = {
  children?: ReactNode;
};

const Header = memo(
  ({ children }: NavProps): JSX.Element => (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </header>
  )
);

Header.displayName = 'Hearder';

export { Header };
