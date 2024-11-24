type GalleryItemProps = {
  src: string;
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
