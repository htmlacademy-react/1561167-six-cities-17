import { nanoid } from 'nanoid';
import Card from '../card/card';
import { TypesPage } from '../../const';

type CardsListProps = {
  rentalOffersCount: number;
};

function CardsList({ rentalOffersCount }: CardsListProps): JSX.Element {
  const cards = Array.from({ length: rentalOffersCount }, () => (
    <Card key={nanoid()} isPremium typesPage={TypesPage.MAIN} />
  ));
  return <> {cards}</>;
}

export default CardsList;
