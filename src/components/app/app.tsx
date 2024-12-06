import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AuthStatus, Path } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import { AuthStatusEnum, OfferType, ShortOfferType } from '../../types/types';

type AppPageProps = {
  shortOffers: ShortOfferType[];
  offer: OfferType;
};

function App({ offer, shortOffers }: AppPageProps): JSX.Element {
  const authStatus: AuthStatusEnum = AuthStatus.Auth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={Path.Root}
            element={
              <MainPage
                shortOffers={shortOffers}
                isLoggedIn={authStatus === AuthStatus.Auth}
              />
            }
          />
          <Route path={Path.Login} element={<LoginPage />} />
          <Route
            path={Path.Favorites}
            element={
              <PrivateRoute
                isLoggedIn={authStatus === AuthStatus.Auth}
                toPath={Path.Login}
              >
                <FavoritesPage
                  shortOffers={shortOffers}
                  isLoggedIn={authStatus === AuthStatus.Auth}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Offer}
            element={
              <OfferPage
                offer={offer}
                nearbyOffers={shortOffers.slice(0, 3)}
                isLoggedIn={authStatus === AuthStatus.Auth}
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
