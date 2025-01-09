import { useParams } from 'react-router-dom';
import { ShortOfferListType } from '../../types/types';
import { NEARBY_OFFERS_LIMITED } from '../../const';

const useUrlId = (): string | null => {
  const { offerId } = useParams();

  return offerId ?? null;
};

const getFirstElements = (
  list: ShortOfferListType,
  count = NEARBY_OFFERS_LIMITED
): ShortOfferListType => list.slice(0, count);

export { useUrlId, getFirstElements };
