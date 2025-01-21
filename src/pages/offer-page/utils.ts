import { useParams } from 'react-router-dom';

const useUrlId = (): string | null => {
  const { offerId } = useParams();

  return offerId ?? null;
};

export { useUrlId };
