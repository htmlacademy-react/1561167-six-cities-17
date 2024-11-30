import { nanoid } from 'nanoid';
import GalleryItem from '../gallery-item/gallery-item';

const images = [
  { src: 'img/room.jpg', alt: 'Photo studio' },
  { src: 'img/apartment-01.jpg', alt: 'Photo studio' },
  { src: 'img/apartment-02.jpg', alt: 'Photo studio' },
  { src: 'img/apartment-03.jpg', alt: 'Photo studio' },
  { src: 'img/studio-01.jpg', alt: 'Photo studio' },
  { src: 'img/apartment-01.jpg', alt: 'Photo studio' },
];

function Gallery(): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map(({ src, alt }) => (
        <GalleryItem key={nanoid()} src={src} alt={alt} />
      ))}
    </div>
  );
}

export default Gallery;
