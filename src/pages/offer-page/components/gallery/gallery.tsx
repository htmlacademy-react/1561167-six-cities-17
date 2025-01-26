import { memo } from 'react';
import { OfferType } from '../../../../types/offer';
import GalleryItem from '../gallery-item/gallery-item';

type GalleryProps = Pick<OfferType, 'images'>;

const Gallery = memo(({ images }: GalleryProps): JSX.Element => {
  const pictures = images.slice(0, 6);

  return (
    <div className="offer__gallery">
      {pictures.map((src) => (
        <GalleryItem key={src} src={src} alt={'Photo studio'} />
      ))}
    </div>
  );
});

Gallery.displayName = 'Gallery';

export { Gallery };
