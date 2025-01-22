import { Path, TypesPage } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type TypesPageKeys = (typeof TypesPage)[keyof typeof TypesPage];

type PathKeys = (typeof Path)[keyof typeof Path];

type OnCardHoverType = (id: string | null) => void;

export type { ImageSizeType, TypesPageKeys, PathKeys, OnCardHoverType };
