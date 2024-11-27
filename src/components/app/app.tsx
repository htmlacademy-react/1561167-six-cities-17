import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppPageProps): JSX.Element {
  const isEmpty = true;
  const isLoggedIn = true;
  return (
    <MainPage
      rentalOffersCount={rentalOffersCount}
      isLoggedIn={isLoggedIn}
      isEmpty={isEmpty}
    />
  );
}

export default App;
