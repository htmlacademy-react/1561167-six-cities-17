import Card from '../card/card';
import cn from 'classnames';
import { TypesPage } from '../../const';
import {
  OnCardHoverType,
  ShortOfferListType,
  SortTypeKeys,
  TypesPageKeys,
} from '../../types/types';
import { sortOffers } from './utils';

type CardsListProps = {
  offers: ShortOfferListType;
  typesPage: TypesPageKeys;
  currentSortKey: SortTypeKeys;
  onCardHover?: OnCardHoverType;
};

function CardsList(props: CardsListProps): JSX.Element {
  const { offers, onCardHover, typesPage, currentSortKey } = props;
  const listClasses = cn({
    ['cities__places-list places__list tabs__content']:
      typesPage === TypesPage.Main,
    ['near-places__list places__list']: typesPage === TypesPage.Offer,
    ['favorites__places']: typesPage === TypesPage.Favorites,
  });
  const sortedOffers = sortOffers(offers, currentSortKey);

  return (
    <div className={listClasses}>
      {sortedOffers.map((offer) => (
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
