import { useAppDispatch } from '../../hooks';
import { Header } from '../../components/header/header';
import { LocationsItemLink } from '../../components/locations-item-link/locations-item-link';
import { Title } from '../../components/title/title';
import { SignIn } from './components/sign-in/sign-in';
import { Page } from '../../const';
import { changePage } from '../../store/page/page-slice';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(changePage(Page.Login));

  return (
    <div className="page page--gray page--login">
      <Title />
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignIn />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationsItemLink isActive />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginPage };
