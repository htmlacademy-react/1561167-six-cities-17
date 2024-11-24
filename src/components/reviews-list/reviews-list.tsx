import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList() {
  return (
    <ul className="reviews__list">
      <ReviewsItem />
      <ReviewsItem />
    </ul>
  );
}

export default ReviewsList;
