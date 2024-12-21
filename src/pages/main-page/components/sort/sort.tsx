import cn from 'classnames';
import { SortItem } from '../sort-item/sort-item';
import { TypesSort } from '../../../../const';
import { SortTypeKeys } from '../../../../types/types';

type SortProps = {
  currentSortKey: SortTypeKeys;
  isOpenDropDown: boolean;
  onDropDownChange: () => void;
  onSortKeyChange: (type: SortTypeKeys) => void;
};

function Sort(props: SortProps): JSX.Element {
  const { currentSortKey, isOpenDropDown, onDropDownChange, onSortKeyChange } =
    props;
  const classesList = cn('places__options places__options--custom', {
    ['places__options--opened']: isOpenDropDown,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        onClick={onDropDownChange}
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
            onSortKeyChange={onSortKeyChange}
            sortKey={sortKey as SortTypeKeys}
            isActive={sortKey === currentSortKey}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
