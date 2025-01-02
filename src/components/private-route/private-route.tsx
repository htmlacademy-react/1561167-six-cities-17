import { Navigate } from 'react-router-dom';
import { PathKeys } from '../../types/types';

type PrivateRouteProps = {
  toPath: PathKeys;
  children: JSX.Element;
  isOpen: boolean;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, toPath, isOpen } = props;

  return isOpen ? children : <Navigate to={toPath} />;
}

export { PrivateRoute };
