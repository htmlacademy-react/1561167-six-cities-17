import { Navigate } from 'react-router-dom';
import { Path } from '../../const';

type PrivateRouteProps = {
  isLoggedIn: boolean;
  children: JSX.Element;
};
function PrivateRoute({
  isLoggedIn,
  children,
}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={Path.Login} />;
}

export { PrivateRoute };
