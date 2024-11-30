import { ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
};

function Footer({ children }: FooterProps): JSX.Element {
  return <footer className="footer container">{children}</footer>;
}

export default Footer;
