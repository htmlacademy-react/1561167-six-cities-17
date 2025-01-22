import cn from 'classnames';
import { TypesSort } from '../../../../const';
import { useAppDispatch } from '../../../../hooks';
import { SortTypeKeys } from '../../../../types/sort';
import { changeSortKey } from '../../../../store/sort-key/sort-key-slice';

type ItemSortProps = {
  isActive: boolean;
  sortKey: SortTypeKeys;
};

function SortItem({ isActive, sortKey }: ItemSortProps): JSX.Element {
  const dispatch = useAppDispatch();

  const classesItem = cn('places__option', {
    ['places__option--active']: isActive,
  });

  return (
    <li
      onClick={() => dispatch(changeSortKey(sortKey))}
      className={classesItem}
      tabIndex={0}
    >
      {TypesSort[sortKey]}
    </li>
  );
}

export { SortItem };
