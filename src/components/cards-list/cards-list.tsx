import Card from '../card/card';
import cn from 'classnames';
import { TypesPage } from '../../const';
import {
  OnCardHoverType,
  ShortOfferListType,
  TypesPageEnum,
} from '../../types/types';

type CardsListProps = {
  offers: ShortOfferListType;
  typesPage: TypesPageEnum;
  onCardHover?: OnCardHoverType;
};

function CardsList({
  offers,
  onCardHover,
  typesPage,
}: CardsListProps): JSX.Element {
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
