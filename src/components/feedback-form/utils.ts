import { CommentLengthLimits } from '../../const';
import { CommentType, RatingType } from '../../types/types';

const isDisable = (comment: CommentType, rating: RatingType): boolean =>
  !comment ||
  !rating ||
  comment.length < CommentLengthLimits.Min ||
  comment.length > CommentLengthLimits.Max;

export { isDisable };
