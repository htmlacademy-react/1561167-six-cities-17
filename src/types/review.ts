import { ChangeEvent } from 'react';
import { UserType } from './types';

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type ReviewsListType = ReviewType[];

export type ClientReviewType = Omit<ReviewType, 'date'> & { date: Date };

export type ClientReviewsListType = ClientReviewType[];

export type RatingType = 1 | 2 | 3 | 4 | 5 | null;

export type CommentType = string;

export type FeedbackType = {
  rating: RatingType;
  comment: CommentType;
};

export type OnChangeEventType = (evt: ChangeEvent<HTMLInputElement>) => void;
