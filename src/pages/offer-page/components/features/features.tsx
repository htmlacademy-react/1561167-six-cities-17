import { OfferType } from '../../../../types/offer';
import { getPluralNoun, toCapitalizeSentence } from '../../../../utils/utils';

type FeaturesProps = Pick<OfferType, 'type' | 'bedrooms' | 'maxAdults'>;

function Features({ type, bedrooms, maxAdults }: FeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {toCapitalizeSentence(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} ${getPluralNoun('Bedroom', bedrooms)}`}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {`${maxAdults} ${getPluralNoun('adult', maxAdults)}`}
      </li>
    </ul>
  );
}

export { Features };
