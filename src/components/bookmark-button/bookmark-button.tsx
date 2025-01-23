import { memo } from 'react';
import cn from 'classnames';
import { TypesPage } from '../../const';
import { SvgSize } from './settings';
import { TypesPageKeys } from '../../types/types';

type BookmarkButtonProps = {
  typesPage: TypesPageKeys;
  isActive?: boolean;
  isCard?: boolean;
};

const BookmarkButton = memo((props: BookmarkButtonProps): JSX.Element => {
  const { typesPage, isActive, isCard } = props;
  const buttonClasses = cn('button', {
    ['place-card__bookmark-button--active']: isActive,
    ['place-card__bookmark-button']: isCard,
    ['offer__bookmark-button']: !isCard && typesPage === TypesPage.Offer,
  });
  const svgClasses = cn({
    ['place-card__bookmark-icon']: isCard,
    ['offer__bookmark-icon']: !isCard && typesPage === TypesPage.Offer,
  });
  const width = isCard ? SvgSize.Card.Width : SvgSize.OffCard.Width;
  const height = isCard ? SvgSize.Card.Height : SvgSize.OffCard.Height;
  const text = isActive ? 'In' : 'To';

  return (
    <button className={buttonClasses} type="button">
      <svg className={svgClasses} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${text} bookmarks`}</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export { BookmarkButton };
