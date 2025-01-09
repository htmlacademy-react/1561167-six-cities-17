import { useParams } from 'react-router-dom';
import { ShortOfferListType } from '../../types/types';
import { NEARBY_OFFERS_LIMIT } from '../../const';

const useUrlId = (): string | null => {
  const { offerId } = useParams();

  return offerId ?? null;
};

const getFirstThreeElements = (list: ShortOfferListType): ShortOfferListType =>
  list.slice(0, NEARBY_OFFERS_LIMIT);

export { useUrlId, getFirstThreeElements };
