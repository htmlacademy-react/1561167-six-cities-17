const Setting = {
  RentalOffersCount: 5,
} as const;

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

const RATING_VALUES = ['one', 'two', 'three', 'four', 'five'] as const;

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

const AuthStatus = {
  Auth: 'auth',
  NoAuth: 'no-auth',
  Unknown: 'unknown',
} as const;

const DEFAULT_PREFIX_TITLE = '6 cities:';

const TextTitle = {
  [TypesPage.Main]: '',
  [TypesPage.Favorites]: 'favorites',
  [TypesPage.Login]: 'authorization',
  [TypesPage.Offer]: 'offer',
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

export {
  Setting,
  STARS_MAXIMUM,
  CITIES,
  TypesPage,
  TypesSort,
  DEFAULT_SORTING_KEY,
  DEFAULT_CURRENT_CITY,
  CommentLengthLimits,
  Path,
  AuthStatus,
  DEFAULT_PREFIX_TITLE,
  TextTitle,
  RATING_VALUES,
  REVIEWS_COUNT_LIMITED,
  Layer,
  Pin,
};
