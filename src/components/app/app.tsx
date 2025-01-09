import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import {
  selectAuthorizationStatus,
  selectIsOffersLoading,
} from '../../store/selectors';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import { LoadingPage } from '../../pages/loading-page/loadig-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { AuthorizationStatus, Path } from '../../const';
import { FavoritesListType } from '../../types/types';
import { AuthorizationStatusKeys } from '../../types/user';

type AppPageProps = {
  favorites: FavoritesListType;
};

function App({ favorites }: AppPageProps): JSX.Element {
  const authorizationStatus: AuthorizationStatusKeys = useAppSelector(
    selectAuthorizationStatus
  );
  const isOffersLoading = useAppSelector(selectIsOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={Path.Root}
            element={<MainPage favoritesCount={favorites.length} />}
          />
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
                <FavoritesPage favorites={favorites} />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Offer}
            element={
              <OfferPage
                favoritesCount={favorites.length}
              />
            }
          />
          <Route path={Path.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
