import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AuthorizationStatus, Path } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import { FavoritesListType, OfferListType } from '../../types/types';
import { useAppSelector } from '../../hooks';
import {
  selectAuthorizationStatus,
  selectIsLoading,
  selectOffers,
} from '../../store/selectors';
import { AuthorizationStatusKeys } from '../../types/user';
import { LoadingPage } from '../../pages/loading-page/loadig-page';

type AppPageProps = {
  offers: OfferListType;
  favorites: FavoritesListType;
};

function App({ offers, favorites }: AppPageProps): JSX.Element {
  const authorizationStatus: AuthorizationStatusKeys = useAppSelector(
    selectAuthorizationStatus
  );
  const isLoading = useAppSelector(selectIsLoading);
  const shortOffers = useAppSelector(selectOffers);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={Path.Root}
            element={
              <MainPage
                favoritesCount={favorites.length}
                isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
              />
            }
          />
          <Route
            path={Path.Login}
            element={
              <PrivateRoute
                isLoggedIn={authorizationStatus !== AuthorizationStatus.Auth}
                toPath={Path.Root}
              >
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Favorites}
            element={
              <PrivateRoute
                isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
                toPath={Path.Login}
              >
                <FavoritesPage
                  favorites={favorites}
                  isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Offer}
            element={
              <OfferPage
                offers={offers}
                favoritesCount={favorites.length}
                nearOffers={[shortOffers[1], shortOffers[3], shortOffers[2]]}
                isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
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
