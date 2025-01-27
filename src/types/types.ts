import { Path } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type PathKeys = (typeof Path)[keyof typeof Path];

type OnCardHoverType = (id: string | null) => void;

export type { ImageSizeType, PathKeys, OnCardHoverType };
