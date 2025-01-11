import { CommentLengthLimits } from '../../../../const';
import { CommentType } from '../../../../types/review';

const isValidValues = (
  comment: CommentType,
  rating: number | null
): boolean => {
  const isValidComment =
    comment.length >= CommentLengthLimits.Min &&
    comment.length <= CommentLengthLimits.Max;

  return isValidComment && typeof rating === 'number' && rating >= 1;
};

export { isValidValues };
