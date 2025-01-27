import { Page } from '../const';
import { InitialState } from './state';

type PageKeys = (typeof Page)[keyof typeof Page];

type PageState = Pick<InitialState, 'currentPage'>;

export type { PageKeys, PageState };
