import { CardsList } from '../../../../components/cards-list/cards-list';
import { ShortOfferListType } from '../../../../types/offers';

type NearbyOffersProps = {
  offers: ShortOfferListType;
};

function NearbyOffers({ offers }: NearbyOffersProps): JSX.Element {
  console.log(offers);
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <CardsList offers={offers} />
        </div>
      </section>
    </div>
  );
}

export { NearbyOffers };
