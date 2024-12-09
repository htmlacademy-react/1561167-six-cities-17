import { CommentLengthLimits } from '../../const';
import { CommentType, RatingType } from '../../types/types';

const isValidValues = (comment: CommentType, rating: RatingType): boolean => {
  const isValidComment =
    typeof comment === 'string' &&
    comment.length >= CommentLengthLimits.Min &&
    comment.length <= CommentLengthLimits.Max;

  return isValidComment && typeof rating === 'number';
};

export { isValidValues };
