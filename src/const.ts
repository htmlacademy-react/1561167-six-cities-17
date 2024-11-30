const Setting = {
  RentalOffersCount: 5,
} as const;

const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const DEFAULT_ACTIVE_LOCATION = LOCATIONS[0];

const TypesPage = {
  Main: 'cities',
  Offer: 'near-places',
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

export {
  Setting,
  LOCATIONS,
  TypesPage,
  TypesSort,
  DEFAULT_SORTING_TYPE,
  DEFAULT_ACTIVE_LOCATION,
  CommentLengthLimits,
  Path,
};
