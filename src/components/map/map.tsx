type mapProps = {
  className: string;
};

function Map({ className }: mapProps): JSX.Element {
  return <section className={`${className} map`}></section>;
}

export default Map;
