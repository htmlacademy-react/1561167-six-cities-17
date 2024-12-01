import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AuthorizationStatus, Path } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { AuthorizationStatusEnum } from '../../types/types';
import { HelmetProvider } from 'react-helmet-async';

type AppPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppPageProps): JSX.Element {
  const isEmpty = false;
  const authorizationStatus: AuthorizationStatusEnum = AuthorizationStatus.Auth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Path.Root}
            element={
              <MainPage
                rentalOffersCount={rentalOffersCount}
                isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
                isEmpty={isEmpty}
              />
            }
          />
          <Route path={Path.Login} element={<LoginPage />} />
          <Route
            path={Path.Favorites}
            element={
              <PrivateRoute
                isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
                toPath={Path.Login}
              >
                <FavoritePage
                  isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
                  isEmpty={isEmpty}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Offer}
            element={
              <OfferPage
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
