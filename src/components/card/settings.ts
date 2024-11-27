const DefaultImageSize = {
  Width: 260,
  Height: 200,
} as const;

const FavoritesImageSize = {
  Width: 150,
  Height: 110,
} as const;

const ImageSize = {
  Default: {
    Width: 260,
    Height: 200,
  },
  Favorites: {
    Width: 150,
    Height: 110,
  },
} as const;

export { DefaultImageSize, FavoritesImageSize, ImageSize };
