import { memo, ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
};

const Footer = memo(
  ({ children }: FooterProps): JSX.Element => (
    <footer className="footer container">{children}</footer>
  )
);

Footer.displayName = 'Footer';

export { Footer };
