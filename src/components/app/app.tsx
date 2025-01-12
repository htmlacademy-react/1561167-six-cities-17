import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectAuthorizationStatus,
  selectIsLoading,
  selectOffers,
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
import { uploadExtendedOffer } from '../../store/api-actions';

type AppPageProps = {
  favorites: FavoritesListType;
};

function App({ favorites }: AppPageProps): JSX.Element {
  const authorizationStatus: AuthorizationStatusKeys = useAppSelector(
    selectAuthorizationStatus
  );
  const isLoading = useAppSelector(selectIsLoading);
  const shortOffers = useAppSelector(selectOffers);

  const dispatch = useAppDispatch();
  const { offerId } = useParams();

  if (offerId) {
    dispatch(uploadExtendedOffer(offerId));
  }

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
                nearOffers={[shortOffers[1], shortOffers[3], shortOffers[2]]}
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
