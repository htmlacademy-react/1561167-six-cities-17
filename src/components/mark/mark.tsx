import cn from 'classnames';

type MarkProps = {
  isCard?: boolean;
};

function Mark({ isCard = false }: MarkProps): JSX.Element {
  const markClasses = cn({
    ['place-card__mark']: isCard,
    ['offer__mark']: !isCard,
  });
  return (
    <div className={markClasses}>
      <span>Premium</span>
    </div>
  );
}

export default Mark;
