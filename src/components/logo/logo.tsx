type LogoValueProps = {
  className: string;
  width: number;
  height: number;
};

type LogoProps = {
  valueAttributesLogo: LogoValueProps;
};

function Logo({ valueAttributesLogo }: LogoProps): JSX.Element {
  const { className, width, height } = valueAttributesLogo;
  return (
    <a className={className}>
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
