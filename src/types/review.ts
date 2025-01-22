import { ChangeEvent } from 'react';
import { InitialState } from './state';
import { HostType } from './offer';

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

type ReviewsState = Pick<
  InitialState,
  'reviewsList' | 'isReviewsListLoading' | 'isSubmitReviewLoading'
>;

export type {
  CommentType,
  ReviewType,
  ReviewsListType,
  ClientReviewType,
  ClientReviewsListType,
  FeedbackType,
  OfferReviewType,
  OnChangeEventType,
  ReviewsState,
};
