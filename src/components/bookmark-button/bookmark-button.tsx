type ButtonProps = {
  buttonClassName: string;
  svgClassName: string;
  width: number;
  height: number;
};

type BookmarkButtonProps = {
  isButtonActive: boolean;
  buttonAttributesValue: ButtonProps;
};

function BookmarkButton({
  isButtonActive,
  buttonAttributesValue,
}: BookmarkButtonProps): JSX.Element {
  const buttonClassName = `${buttonAttributesValue.buttonClassName} ${
    isButtonActive ? 'place-card__bookmark-button--active' : ''
  }`;
  return (
    <button className={buttonClassName} type="button">
      <svg
        className={buttonAttributesValue.svgClassName}
        width={buttonAttributesValue.width}
        height={buttonAttributesValue.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
