import {
  CityType,
  GroupedOffersType,
  ShortOfferListType,
} from '../../types/types';

function groupByList(list: ShortOfferListType): GroupedOffersType {
  const result: GroupedOffersType = {};

  list.forEach((item) => {
    const name: CityType = item.city.name;

    if (result[name]) {
      result[name].push(item);
    } else {
      result[name] = [item];
    }
  });

  return result;
}

export { groupByList };
