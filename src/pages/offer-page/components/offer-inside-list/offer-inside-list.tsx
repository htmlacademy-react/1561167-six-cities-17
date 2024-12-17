import { OfferInsideItem } from '../offer-inside-item/offer-inside-item';

type InsideListProps = {
  internalOffers: string[];
};

function OfferInsideList(props: InsideListProps): JSX.Element {
  const { internalOffers } = props;
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {internalOffers.map((item, id) => (
          <OfferInsideItem key={id.toString() + item} item={item} />
        ))}
      </ul>
    </div>
  );
}

export { OfferInsideList };
