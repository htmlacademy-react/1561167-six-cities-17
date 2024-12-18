import cn from 'classnames';
import { TypesSort } from '../../../../const';
import { SortTypeKeys } from '../../../../types/types';

type ItemSortProps = {
  item: string;
  isActive: boolean;
  dataSort: SortTypeKeys;
  onSortKeyChange: (type: SortTypeKeys) => void;
};

type SortProps = {
  currentSortKey: SortTypeKeys;
  isOpenSorting: boolean;
  onSortChange: () => void;
  onSortKeyChange: (type: SortTypeKeys) => void;
};

function ItemSort(props: ItemSortProps): JSX.Element {
  const { item, isActive, dataSort, onSortKeyChange } = props;
  const classesItem = cn('places__option', {
    ['places__option--active']: isActive,
  });

  return (
    <li
      onClick={() => onSortKeyChange(dataSort)}
      className={classesItem}
      tabIndex={0}
    >
      {item}
    </li>
  );
}

function Sort(props: SortProps): JSX.Element {
  const { currentSortKey, isOpenSorting, onSortChange, onSortKeyChange } =
    props;
  const classesList = cn('places__options places__options--custom', {
    ['places__options--opened']: isOpenSorting,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        onClick={onSortChange}
        className="places__sorting-type"
        tabIndex={0}
      >
        {TypesSort[currentSortKey]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classesList}>
        {Object.keys(TypesSort).map((key) => (
          <ItemSort
            key={key}
            onSortKeyChange={onSortKeyChange}
            dataSort={key as SortTypeKeys}
            item={TypesSort[key as SortTypeKeys]}
            isActive={key === currentSortKey}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
