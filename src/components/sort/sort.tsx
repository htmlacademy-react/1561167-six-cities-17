import { nanoid } from 'nanoid';
import { TypesSort } from '../../const';

type ItemSortProps = {
  item: string;
  isActive: boolean;
};

type SortProps = {
  currentSortType: string;
};

function ItemSort({ item, isActive }: ItemSortProps): JSX.Element {
  const className = isActive
    ? 'places__option places__option--active'
    : 'places__option';
  return (
    <li className={className} tabIndex={0}>
      {item}
    </li>
  );
}

function Sort({ currentSortType }: SortProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(TypesSort).map((item) => (
          <ItemSort
            key={nanoid()}
            item={item}
            isActive={item === currentSortType}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
