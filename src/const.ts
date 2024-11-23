const Setting = {
  rentalOffersCount: 5,
} as const;

const HeaderLogoValue = {
  className: 'header__logo-link header__logo-link--active',
  width: 81,
  height: 41,
} as const;

const BookmarkButtonValue = {
  buttonClassName: 'place-card__bookmark-button button',
  svgClassName: 'place-card__bookmark-icon',
  width: 18,
  height: 19,
} as const;

const Locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export { Setting, HeaderLogoValue, Locations, BookmarkButtonValue };
