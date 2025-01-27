import { useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_PREFIX_TITLE, TextTitle } from '../../const';
import { selectCurrentPage } from '../../store/page/page-selectors';

type TitleProps = {
  isEmpty?: boolean;
};

function Title({ isEmpty = false }: TitleProps): JSX.Element {
  const page = useAppSelector(selectCurrentPage);
  const extension = isEmpty ? ' empty' : '';
  return (
    <Helmet>
      <title>{`${DEFAULT_PREFIX_TITLE} ${TextTitle[page]}${extension}`}</title>
    </Helmet>
  );
}

export { Title };
