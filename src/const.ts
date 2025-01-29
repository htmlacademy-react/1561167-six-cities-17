const STARS_MAXIMUM = 5;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const DEFAULT_CURRENT_CITY = CITIES[0];

const RATING_VALUES = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

const Page = {
  Main: 'main',
  Offer: 'offer',
  Favorites: 'favorites',
  Login: 'login',
  NotFoundPage: 'notFoundPage',
} as const;

const TypesSort = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

const DEFAULT_SORTING_KEY = 'Popular';

const CommentLengthLimits = {
  Min: 50,
  Max: 300,
} as const;

const Path = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:offerId',
  NotFound: '*',
} as const;

const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

const DEFAULT_PREFIX_TITLE = '6 cities:';

const TextTitle = {
  [Page.Main]: '',
  [Page.Favorites]: 'favorites',
  [Page.Login]: 'authorization',
  [Page.Offer]: 'offer',
  [Page.NotFoundPage]: 'not fount page',
} as const;

const REVIEWS_COUNT_LIMITED = 10;

const Layer = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const Pin = {
  DefaultUrl: '/img/pin.svg',
  CurrentUrl: '/img/pin-active.svg',
  Size: [28, 40] as [number, number],
  Anchor: [14, 40] as [number, number],
} as const;

const Server = {
  Url: 'https://16.design.htmlacademy.pro/six-cities',
  Timeout: 5000,
} as const;

const TOKEN_KEY = 'six-cities-token-key';

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  ExtendedOffer: '/offers/:offerId',
  NearbyOffers: '/offers/:offerId/nearby',
  Comments: '/comments/:offerId',
  Favorites: '/favorite',
  ChangeStatus: '/favorite/:offerId/:status',
};

const ERROR_SHOW_TIMEOUT = 2500;

const NEARBY_OFFERS_LIMITED = 3;

const NameSpace = {
  User: 'user',
  Offers: 'offers',
  City: 'city',
  SortKey: 'sortKey',
  ExtendedOffer: 'extendedOffer',
  Reviews: 'reviews',
  Error: 'error',
  Favorites: 'favorite',
  Page:'page',
} as const;

const Status = {
  In: 1,
  Out: 0,
} as const;

export {
  STARS_MAXIMUM,
  CITIES,
  Page,
  TypesSort,
  DEFAULT_SORTING_KEY,
  DEFAULT_CURRENT_CITY,
  CommentLengthLimits,
  Path,
  AuthorizationStatus,
  DEFAULT_PREFIX_TITLE,
  TextTitle,
  RATING_VALUES,
  REVIEWS_COUNT_LIMITED,
  Layer,
  Pin,
  Server,
  TOKEN_KEY,
  APIRoute,
  ERROR_SHOW_TIMEOUT,
  NEARBY_OFFERS_LIMITED,
  NameSpace,
  Status,
};
