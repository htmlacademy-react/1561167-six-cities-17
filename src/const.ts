const Setting = {
  RentalOffersCount: 5,
} as const;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const DEFAULT_ACTIVE_CITY = CITIES[0];

const TypesPage = {
  Main: 'main',
  Offer: 'offer',
  Favorites: 'favorites',
  Login: 'login',
} as const;

const TypesSort = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

const DEFAULT_SORTING_TYPE = TypesSort.Popular;

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

const AuthStatus = {
  Auth: 'auth',
  NoAuth: 'no_auth',
  Unknown: 'unknown',
} as const;

const DEFAULT_PREFIX_TITLE = '6 cities:';

const TextTitle = {
  [TypesPage.Main]: '',
  [TypesPage.Favorites]: 'favorites',
  [TypesPage.Login]: 'authorization',
  [TypesPage.Offer]: 'offer',
} as const;

export {
  Setting,
  CITIES,
  TypesPage,
  TypesSort,
  DEFAULT_SORTING_TYPE,
  DEFAULT_ACTIVE_CITY,
  CommentLengthLimits,
  Path,
  AuthStatus,
  DEFAULT_PREFIX_TITLE,
  TextTitle,
};
