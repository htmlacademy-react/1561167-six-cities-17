import { Navigate } from 'react-router-dom';
import { PathKeys } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/selectors';

type PrivateRouteProps = {
  toPath: PathKeys;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, toPath } = props;
  const isLoggedIn = useAppSelector(selectAuthorizationStatus);

  return isLoggedIn ? children : <Navigate to={toPath} />;
}

export { PrivateRoute };
