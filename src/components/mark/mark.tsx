import cn from 'classnames';
import { memo } from 'react';

type MarkProps = {
  isCard?: boolean;
};

const Mark = memo(({ isCard = false }: MarkProps): JSX.Element => {
  const markClasses = cn({
    ['place-card__mark']: isCard,
    ['offer__mark']: !isCard,
  });
  return (
    <div className={markClasses}>
      <span>Premium</span>
    </div>
  );
});

Mark.displayName = 'Mark';

export { Mark };
