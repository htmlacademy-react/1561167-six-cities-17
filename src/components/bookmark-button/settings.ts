import { ImageSizeType } from '../../types/types';

const SvgSize: ImageSizeType = {
  Card: {
    Width: 18,
    Height: 19,
  },
  OffCard: {
    Width: 31,
    Height: 33,
  },
} as const;

export { SvgSize };
