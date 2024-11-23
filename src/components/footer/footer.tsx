import { FooterLogoValue } from '../../const';
import Logo from '../logo/logo';

type FooterProps = {
  pageType: string;
};

function Footer({ pageType }: FooterProps): JSX.Element {
  return (
    <footer className="footer container">
      <Logo pageType={pageType} valueAttributesLogo={FooterLogoValue} />
    </footer>
  );
}

export default Footer;
