import { useAppSelector } from '../../hooks';
import { selectCurrentCity } from '../../store/selectors';
import Header from '../../components/header/header';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import { Title } from '../../components/title/title';
import { SignIn } from './components/sign-in/sign-in';
import { TypesPage } from '../../const';
import { TypesPageKeys } from '../../types/types';

function LoginPage(): JSX.Element {
  const currentCity = useAppSelector(selectCurrentCity);

  const typesPage: TypesPageKeys = TypesPage.Login;

  return (
    <div className="page page--gray page--login">
      <Title typesPage={typesPage} />
      <Header typesPage={typesPage} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignIn />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationsItemLink city={currentCity} typesPage={typesPage} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginPage };
