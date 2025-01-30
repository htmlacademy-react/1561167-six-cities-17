import { toWordCapitalLetter } from '../../../../utils/utils';

type InsideItemProps = {
  item: string;
};

function OfferInsideItem({ item }: InsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{toWordCapitalLetter(item)}</li>;
}

export { OfferInsideItem };
