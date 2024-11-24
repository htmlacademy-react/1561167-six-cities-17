import { nanoid } from 'nanoid';
import Card from '../card/card';

type CardsListProps = {
  rentalOffersCount: number;
  typesPage: string;
};

function CardsList({
  rentalOffersCount,
  typesPage,
}: CardsListProps): JSX.Element {
  const cards = Array.from({ length: rentalOffersCount }, () => (
    <Card key={nanoid()} isPremium typesPage={typesPage} />
  ));
  return <> {cards}</>;
}

export default CardsList;
