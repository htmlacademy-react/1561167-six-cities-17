import { OfferType } from './offer';

export type MapPointsListType = Pick<OfferType, 'id' | 'city' | 'location'>[];
