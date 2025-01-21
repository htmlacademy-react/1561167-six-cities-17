import { ChangeEvent } from 'react';
import { HostType } from './offers';

type CommentType = string;

type ReviewType = {
  id: string;
  date: string;
  user: HostType;
  comment: CommentType;
  rating: number;
};

type ReviewsListType = ReviewType[];

type ClientReviewType = Omit<ReviewType, 'date'> & { date: Date };

type ClientReviewsListType = ClientReviewType[];

type FeedbackType = {
  rating: number;
  comment: CommentType;
};

type OfferReviewType = {
  offerId: string;
  review: FeedbackType;
};

type OnChangeEventType = (evt: ChangeEvent<HTMLInputElement>) => void;

export type {
  CommentType,
  ReviewType,
  ReviewsListType,
  ClientReviewType,
  ClientReviewsListType,
  FeedbackType,
  OfferReviewType,
  OnChangeEventType,
};
