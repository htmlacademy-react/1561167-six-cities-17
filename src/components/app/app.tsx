import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AuthStatus, DEFAULT_CURRENT_CITY, Path } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import {
  AuthStatusEnum,
  CityType,
  FavoritesListType,
  OfferListType,
  ShortOfferType,
} from '../../types/types';
import { useState } from 'react';

type AppPageProps = {
  shortOffers: ShortOfferType[];
  offers: OfferListType;
  favorites: FavoritesListType;
};

function App({ offers, shortOffers, favorites }: AppPageProps): JSX.Element {
  const [currentCity, setCurrentCity] =
    useState<CityType>(DEFAULT_CURRENT_CITY);
  const handleCurrentCityChange = (city: CityType): void => {
    if (city === currentCity) {
      return;
    }
    setCurrentCity(city);
  };

  const authStatus: AuthStatusEnum = AuthStatus.Auth;
  const cityOffers = shortOffers.filter(
    ({ city }) => city.name === currentCity
  );

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={Path.Root}
            element={
              <MainPage
                currentCity={currentCity}
                onCurrentCityChange={handleCurrentCityChange}
                cityOffers={cityOffers}
                favorites={favorites}
                isLoggedIn={authStatus === AuthStatus.Auth}
              />
            }
          />
          <Route
            path={Path.Login}
            element={
              <PrivateRoute
                isLoggedIn={authStatus !== AuthStatus.Auth}
                toPath={Path.Root}
              >
                <LoginPage
                  currentCity={currentCity}
                  onCurrentCityChange={handleCurrentCityChange}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Favorites}
            element={
              <PrivateRoute
                isLoggedIn={authStatus === AuthStatus.Auth}
                toPath={Path.Login}
              >
                <FavoritesPage
                  onCurrentCityChange={handleCurrentCityChange}
                  favorites={favorites}
                  isLoggedIn={authStatus === AuthStatus.Auth}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Path.Offer}
            element={
              <OfferPage
                currentCity={currentCity}
                offers={offers}
                favorites={favorites}
                nearbyOffers={[shortOffers[1], shortOffers[3], shortOffers[2]]}
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
