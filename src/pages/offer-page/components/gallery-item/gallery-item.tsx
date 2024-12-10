import { OfferType } from '../../../../types/types';

type GalleryItemProps = {
  src: OfferType['images'][number];
  alt: string;
};

function GalleryItem({ src, alt }: GalleryItemProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt={alt} />
    </div>
  );
}

export default GalleryItem;
