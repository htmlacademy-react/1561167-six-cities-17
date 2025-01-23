import { CardsList } from '../../../../components/cards-list/cards-list';
import { ShortOfferListType } from '../../../../types/offers';
import { TypesPageKeys } from '../../../../types/types';

type NearbyOffersProps = {
  offers: ShortOfferListType;
  typesPage: TypesPageKeys;
};

function NearbyOffers({ offers, typesPage }: NearbyOffersProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <CardsList offers={offers} typesPage={typesPage} />
        </div>
      </section>
    </div>
  );
}

export { NearbyOffers };
