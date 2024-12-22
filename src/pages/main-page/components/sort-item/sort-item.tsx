import cn from 'classnames';
import { SortTypeKeys } from '../../../../types/types';
import { TypesSort } from '../../../../const';
import { currentSortKeyChange } from '../../../../store/action';
import { useAppDispatch } from '../../../../hooks';

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
      onClick={() => dispatch(currentSortKeyChange(sortKey))}
      className={classesItem}
      tabIndex={0}
    >
      {TypesSort[sortKey]}
    </li>
  );
}

export { SortItem };
