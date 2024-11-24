const Setting = {
  rentalOffersCount: 5,
} as const;

const HeaderLogoValue = {
  className: 'header__logo-link header__logo-link--active',
  width: 81,
  height: 41,
} as const;

const FooterLogoValue = {
  className: 'footer__logo-link',
  width: 64,
  height: 33,
} as const;

const BookmarkButtonValue = {
  buttonClassName: 'place-card__bookmark-button button',
  svgClassName: 'place-card__bookmark-icon',
  width: 18,
  height: 19,
} as const;

const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const DEFAULT_ACTIVE_LOCATION = LOCATIONS[0];

const TypesPage = {
  MAIN: 'cities',
  OFFER: 'near-places',
  FAVORITES: 'favorites',
} as const;

const TypesSort = {
  popular: 'Popular',
  lowToHigh: 'Price: low to high',
  highToLow: 'Price: high to low',
  rating: 'Top rated first',
} as const;

const DEFAULT_SORTING_TYPE = TypesSort.popular;

export {
  Setting,
  HeaderLogoValue,
  LOCATIONS,
  BookmarkButtonValue,
  TypesPage,
  FooterLogoValue,
  TypesSort,
  DEFAULT_SORTING_TYPE,
  DEFAULT_ACTIVE_LOCATION,
};
