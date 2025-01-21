import { OfferType } from './offers';

export type MapPointsListType = Pick<OfferType, 'id' | 'city' | 'location'>[];
