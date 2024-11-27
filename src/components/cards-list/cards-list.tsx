import { nanoid } from 'nanoid';
import Card from '../card/card';
import cn from 'classnames';
import { TypesPage } from '../../const';

type CardsListProps = {
  rentalOffersCount: number;
  typesPage: string;
};

function CardsList({
  rentalOffersCount,
  typesPage,
}: CardsListProps): JSX.Element {
  const cards = Array.from({ length: rentalOffersCount }, (_, i) => ++i);
  const listClasses = cn({
    ['cities__places-list places__list tabs__content']:
      typesPage === TypesPage.Main,
    ['near-places__list places__list']: typesPage === TypesPage.Offer,
    ['favorites__places']: typesPage === TypesPage.Favorites,
  });
  return (
    <div className={listClasses}>
      {cards.map(() => (
        <Card key={nanoid()} isPremium typesPage={typesPage} />
      ))}
    </div>
  );
}

export default CardsList;
