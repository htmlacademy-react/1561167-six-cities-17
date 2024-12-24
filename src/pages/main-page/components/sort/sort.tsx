import cn from 'classnames';
import { SortItem } from '../sort-item/sort-item';
import { TypesSort } from '../../../../const';
import { SortTypeKeys } from '../../../../types/types';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../../hooks';
import { selectCurrentSortKey } from '../../../../store/selectors';

function Sort(): JSX.Element {
  const [isOpenDropDown, setOpenDropDown] = useState<boolean>(false);
  const sortingValueRef = useRef<HTMLElement | null>(null);
  const currentSortKey = useAppSelector(selectCurrentSortKey);

  const classesList = cn('places__options places__options--custom', {
    ['places__options--opened']: isOpenDropDown,
  });

  useEffect(() => {
    const handleDropDownChange = (evt: MouseEvent) => {
      if (
        evt.target instanceof HTMLElement &&
        sortingValueRef.current &&
        !sortingValueRef.current.contains(evt.target)
      ) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener('click', handleDropDownChange);

    return () => document.removeEventListener('click', handleDropDownChange);
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        ref={sortingValueRef}
        onClick={() => setOpenDropDown((prev) => !prev)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {TypesSort[currentSortKey]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classesList}>
        {Object.keys(TypesSort).map((sortKey) => (
          <SortItem
            key={sortKey}
            sortKey={sortKey as SortTypeKeys}
            isActive={sortKey === currentSortKey}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
