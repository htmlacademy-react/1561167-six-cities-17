type LogoValueProps = {
  className: string;
  width: number;
  height: number;
};

type LogoProps = {
  pageType?: string;
  valueAttributesLogo: LogoValueProps;
};

function Logo({ valueAttributesLogo, pageType = '' }: LogoProps): JSX.Element {
  const { className, width, height } = valueAttributesLogo;
  if (pageType.length === 0) {
    return (
      <a className={`${className} header__logo-link--active`}>
        <img
          className="header__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={width}
          height={height}
        />
      </a>
    );
  }
  return (
    <a className={className} href="main.html">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
