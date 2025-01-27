import { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LogoSize } from './settings';
import { Path, Page } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCurrentPage } from '../../store/page/page-selectors';

type LogoProps = {
  isFooter?: boolean;
};

const Logo = memo(({ isFooter = false }: LogoProps): JSX.Element => {
  const page = useAppSelector(selectCurrentPage);
  const linkClasses = cn({
    ['header__logo-link']: !isFooter,
    ['header__logo-link--active']: !isFooter && page === Page.Main,
    ['footer__logo-link']: isFooter,
  });
  const imageClasses = cn({
    ['header__logo']: !isFooter,
    ['footer__logo']: isFooter,
  });
  return (
    <Link className={linkClasses} to={Path.Root}>
      <img
        className={imageClasses}
        src="img/logo.svg"
        alt="6 cities logo"
        width={isFooter ? LogoSize.Footer.Width : LogoSize.Header.Width}
        height={isFooter ? LogoSize.Footer.Height : LogoSize.Header.Height}
      />
    </Link>
  );
});

Logo.displayName = 'Logo';

export { Logo };
