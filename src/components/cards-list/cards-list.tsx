import Card from '../card/card';
import cn from 'classnames';
import { OnCardHoverType } from '../../types/types';
import { ShortOfferListType } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { selectCurrentPage } from '../../store/page/page-selectors';
import { Page } from '../../const';

type CardsListProps = {
  offers: ShortOfferListType;
  onCardHover?: OnCardHoverType;
};

function CardsList(props: CardsListProps): JSX.Element {
  const { offers, onCardHover } = props;
  const page = useAppSelector(selectCurrentPage);

  const listClasses = cn({
    ['cities__places-list places__list tabs__content']:
    page === Page.Main,
    ['near-places__list places__list']: page === Page.Offer,
    ['favorites__places']: page === Page.Favorites,
  });

  return (
    <div className={listClasses}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          onCardHover={onCardHover}
          offer={offer}
          page={page}
        />
      ))}
    </div>
  );
}

export { CardsList };
