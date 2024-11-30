import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { Path } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppPageProps): JSX.Element {
  const isEmpty = false;
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Path.Root}
          element={
            <MainPage
              rentalOffersCount={rentalOffersCount}
              isLoggedIn={isLoggedIn}
              isEmpty={isEmpty}
            />
          }
        />
        <Route path={Path.Login} element={<LoginPage />} />
        <Route
          path={Path.Favorites}
          element={<FavoritePage isLoggedIn={isLoggedIn} isEmpty={isEmpty} />}
        />
        <Route
          path={Path.Offer}
          element={<OfferPage isLoggedIn={isLoggedIn} />}
        />
        <Route path={Path.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
