import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import { LoadingPage } from '../../pages/loading-page/loadig-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { AuthorizationStatus, Path } from '../../const';
import { AuthorizationStatusKeys } from '../../types/user';
import { selectAuthorizationStatus } from '../../store/user/user-selectors';
import { selectIsOffersLoading } from '../../store/offers/offers-selectors';
import { useEffect } from 'react';
import {
  checkAuthorizationStatus,
  uploadFavorites,
  uploadOffers,
} from '../../store/api-actions';
import { setError } from '../../store/actions';
import { selectErrorMessage } from '../../store/error/error-selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus: AuthorizationStatusKeys = useAppSelector(
    selectAuthorizationStatus
  );
  const isOffersLoading = useAppSelector(selectIsOffersLoading);
  const error = useAppSelector(selectErrorMessage);

  useEffect(() => {
    dispatch(uploadOffers())
      .unwrap()
      .then(() => {
        dispatch(setError(null));
        dispatch(checkAuthorizationStatus());
      })
      .catch(({ message }) => dispatch(setError(message as string)));
  }, [dispatch]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(uploadFavorites())
        .unwrap()
        .then(() => {
          dispatch(setError(null));
        })
        .catch(({ message }) => dispatch(setError(message as string)));
    }
  }, [dispatch, authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return <LoadingPage />;
  }

  if (!error) {
    <b>{error}</b>;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={Path.Root} element={<MainPage />} />
          <Route
            path={Path.Login}
            element={
              <PrivateRoute
                toPath={Path.Root}
                isOpen={authorizationStatus === AuthorizationStatus.NoAuth}
              >
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Favorites}
            element={
              <PrivateRoute
                toPath={Path.Login}
                isOpen={authorizationStatus === AuthorizationStatus.Auth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={Path.Offer} element={<OfferPage />} />
          <Route path={Path.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
