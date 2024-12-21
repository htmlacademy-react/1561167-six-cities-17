import cn from 'classnames';
import { SortTypeKeys } from '../../../../types/types';
import { TypesSort } from '../../../../const';

type ItemSortProps = {
  isActive: boolean;
  sortKey: SortTypeKeys;
  onSortKeyChange: (type: SortTypeKeys) => void;
};

function SortItem(props: ItemSortProps): JSX.Element {
  const { isActive, sortKey, onSortKeyChange } = props;
  const classesItem = cn('places__option', {
    ['places__option--active']: isActive,
  });

  return (
    <li
      onClick={() => onSortKeyChange(sortKey)}
      className={classesItem}
      tabIndex={0}
    >
      {TypesSort[sortKey]}
    </li>
  );
}

export { SortItem };
