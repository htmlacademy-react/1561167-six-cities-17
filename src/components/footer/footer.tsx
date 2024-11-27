import Logo from '../logo/logo';

type FooterProps = {
  typesPage: string;
};

function Footer({ typesPage }: FooterProps): JSX.Element {
  return (
    <footer className="footer container">
      <Logo typesPage={typesPage} isFooter />
    </footer>
  );
}

export default Footer;
