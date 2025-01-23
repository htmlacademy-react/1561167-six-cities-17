import { store } from '../store';
import { CityKeys } from './cities';
import { OfferType } from './offer';
import { ShortOfferListType } from './offers';
import { ReviewsListType } from './review';
import { SortTypeKeys } from './sort';
import { AuthorizationStatusKeys, UserInfo} from './user';

type InitialState = {
  currentCity: CityKeys;
  currentSortKey: SortTypeKeys;
  offers: ShortOfferListType;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatusKeys;
  userInfo: UserInfo | null;
  isAuthRequestExecuted: boolean;
  extendedOffer: OfferType | null;
  isExtendedOfferLoading: boolean;
  nearbyOffers: ShortOfferListType;
  isNearbyOffersLoading: boolean;
  reviewsList: ReviewsListType;
  isReviewsListLoading: boolean;
  isSubmitReviewLoading: boolean;
  error: string | null;
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { InitialState, State, AppDispatch };
