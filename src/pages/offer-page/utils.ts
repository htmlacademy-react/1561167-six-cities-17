import { useParams } from 'react-router-dom';

function useUrlId(): string | null {
  const { offerId } = useParams();

  return offerId ?? null;
}

export { useUrlId };
