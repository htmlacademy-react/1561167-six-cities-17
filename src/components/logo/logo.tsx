import cn from 'classnames';
import { TypesPage } from '../../const';
import { ImageSizeFooter, ImageSizeHeader } from './settings';

type LogoProps = {
  typesPage: string;
  isFooter?: boolean;
};

function Logo({ typesPage, isFooter = false }: LogoProps): JSX.Element {
  const linkClasses = cn({
    ['header__logo-link']: !isFooter,
    ['header__logo-link--active']: !isFooter && typesPage === TypesPage.Main,
    ['footer__logo-link']: isFooter,
  });
  const imageClasses = cn({
    ['header__logo']: !isFooter,
    ['footer__logo']: isFooter,
  });
  return (
    <a className={linkClasses} href="#">
      <img
        className={imageClasses}
        src="img/logo.svg"
        alt="6 cities logo"
        width={isFooter ? ImageSizeFooter.Width : ImageSizeHeader.Width}
        height={isFooter ? ImageSizeFooter.Height : ImageSizeHeader.Height}
      />
    </a>
  );
}

export default Logo;
