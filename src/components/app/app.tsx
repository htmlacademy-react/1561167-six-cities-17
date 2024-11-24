import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppPageProps): JSX.Element {
  return <MainPage rentalOffersCount={rentalOffersCount} />;
}

export default App;
