import { Helmet } from 'react-helmet-async';
import { DEFAULT_PREFIX_TITLE, TextTitle } from '../../const';
import { TypesPageKeys } from '../../types/types';

type TitleProps = {
  typesPage: TypesPageKeys;
  isEmpty?: boolean;
};

function Title({ typesPage, isEmpty = false }: TitleProps): JSX.Element {
  const extension = isEmpty ? ' empty' : '';
  return (
    <Helmet>
      <title>{`${DEFAULT_PREFIX_TITLE} ${TextTitle[typesPage]}${extension}`}</title>
    </Helmet>
  );
}

export { Title };
