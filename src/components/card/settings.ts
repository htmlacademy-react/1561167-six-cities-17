import { ImageSizeType } from '../../types/types';

const ImageSize: ImageSizeType = {
  Default: {
    Width: 260,
    Height: 200,
  },
  Favorites: {
    Width: 150,
    Height: 110,
  },
} as const;

export { ImageSize };
