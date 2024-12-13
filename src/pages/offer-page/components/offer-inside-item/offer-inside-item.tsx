type InsideItemProps = {
  item: string;
};

function OfferInsideItem({ item }: InsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{item}</li>;
}

export { OfferInsideItem };
