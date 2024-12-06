import { OfferType } from '../../types/types';
import GalleryItem from '../gallery-item/gallery-item';

type GalleryProps = Pick<OfferType, 'images'>;

function Gallery({ images }: GalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map((src) => (
        <GalleryItem key={src} src={src} alt={'Photo studio'} />
      ))}
    </div>
  );
}

export default Gallery;
