import { CommentLengthLimits } from '../../const';
import { CommentType, RatingType } from '../../types/types';

const isValidValues = (comment: CommentType, rating: RatingType): boolean => {
  const isValidComment =
    typeof comment === 'string' &&
    comment.length >= CommentLengthLimits.Min &&
    comment.length <= CommentLengthLimits.Max;
  const isValidRating =
    typeof rating === 'number' && rating >= 1 && rating <= 5;

  return isValidComment && isValidRating;
};

export { isValidValues };
