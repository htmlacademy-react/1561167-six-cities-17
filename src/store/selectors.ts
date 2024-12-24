import { StateType } from './reducer';

const selectOffers = (state: StateType) => state.offers;

const selectCurrentCity = (state: StateType) => state.currentCity;

const selectCurrentSortKey = (state: StateType) => state.currentSortKey;

export { selectOffers, selectCurrentCity, selectCurrentSortKey };
