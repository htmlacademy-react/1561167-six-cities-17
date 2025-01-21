import Card from '../card/card';
import cn from 'classnames';
import { TypesPage } from '../../const';
import {
  OnCardHoverType,
  TypesPageKeys,
} from '../../types/types';
import { ShortOfferListType } from '../../types/offers';

type CardsListProps = {
  offers: ShortOfferListType;
  typesPage: TypesPageKeys;
  onCardHover?: OnCardHoverType;
};

function CardsList(props: CardsListProps): JSX.Element {
  const { offers, onCardHover, typesPage } = props;

  const listClasses = cn({
    ['cities__places-list places__list tabs__content']:
      typesPage === TypesPage.Main,
    ['near-places__list places__list']: typesPage === TypesPage.Offer,
    ['favorites__places']: typesPage === TypesPage.Favorites,
  });

  return (
    <div className={listClasses}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          onCardHover={onCardHover}
          offer={offer}
          typesPage={typesPage}
        />
      ))}
    </div>
  );
}

export default CardsList;
