import { Navigate } from 'react-router-dom';
import { PathKeys } from '../../types/types';

type PrivateRouteProps = {
  toPath: PathKeys;
  isLoggedIn: boolean;
  children: JSX.Element;
};

function PrivateRoute({
  isLoggedIn,
  children,
  toPath,
}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={toPath} />;
}

export { PrivateRoute };
